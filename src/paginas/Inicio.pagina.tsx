import Filtros from "../componentes/personagens/filtros.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import { useDispatch } from "react-redux";
import { FormEvent, useEffect, useState } from "react";
import { fetchCharacterByName, fetchCharactersThunk } from "../store/actions/api";
import { useSelector } from "../store";
import { Helmet } from "react-helmet";

/**
 * Esta é a página principal. Aqui você deve ver o painel de filtro junto com a grade de personagens.
 *
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */
const PaginaInicio = () => {
  const [titleFilter, setTitleFilter] = useState('')
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();

  const { response, isFeching, messageError } = useSelector(({ fetchCharacters }) => {
    return fetchCharacters;
  })

  useEffect(() => {
    fetchCharactersThunk(dispatch, page);
  }, [page])

  /**
   * Função que executa a chamada a APi quando o usuário clica no botão de filtrar.
   * @param e - Evento de submit do formulário
   */
  const searchByNameCharacter = (e: FormEvent) => {
    e.preventDefault()
    fetchCharacterByName(dispatch, titleFilter)
  }

  /**
   * Função para mudar a página
   * @param page Número da página
   */
  const handlePage = (page: number) => {
    setPage(page);
  }

  /**
   * Função para filtrar a pesquisa pelo nome do personagem
   * @param title Nome do personagem
   */
  const handleTitleFilter = (title: string) => {
    setTitleFilter(title)
  }


  return (
    <>
    <Helmet>
      <title>Catálogo Rick and Morty</title>
    </Helmet>
      <div className="container">
        <div className="actions">
          <h3>Catálogo de Personagens</h3>
          <button className="danger" type="button" onClick={() => {
            setTitleFilter('')
            fetchCharacterByName(dispatch, '')
          }}>Limpar filtros</button>
        </div>
        <form onSubmit={searchByNameCharacter}>
          <Filtros title={titleFilter} handleFilter={handleTitleFilter} />
        </form>
        {isFeching ? <p>Carregando...</p> : null}
        {messageError ? <p>{messageError}</p> : null}
        <Paginacao page={page} disabledNext={!response.info?.next} onChange={handlePage} />
        <GradePersonagens characters={response.results} />
        <Paginacao page={page} disabledNext={!response.info?.next} onChange={handlePage} />
      </div>
    </>
  );
};

export default PaginaInicio;
