import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useSelector } from "../store";
import { resetFavs } from "../store/actions/favorite";

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {
  const { favoritos } = useSelector(({ fetchFavorites }) => fetchFavorites)
  const dispatch = useDispatch();

  return (
    <>
    <Helmet>
      <title>Rick and morty | favoritos</title>
    </Helmet>
      <div className="container">
        <div className="actions">
          <h3>Personagens Favoritos</h3>
          <button
            onClick={() => dispatch(resetFavs())}
            className="danger"
          >Remover tudo</button>
        </div>
        {favoritos.length > 0 ? <GradePersonagens characters={favoritos} /> : <h1>Sem favoritos</h1>}
      </div>
    </>
  );
};

export default PaginaFavoritos;
