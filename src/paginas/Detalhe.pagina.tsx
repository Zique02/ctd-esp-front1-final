import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import { ICharacter } from "../interfaces/Character";
import { iEpisode } from "../interfaces/Episode";
import { useSelector } from "../store";
import { addFav, removeFav } from "../store/actions/favorite";
import "./Detalhe.css";

/**
 * Esta é a página de detalhe. Aqui você deve ver todos os detalhes de um personagem
 * 
 * Uso:
 * ``` <PaginaDetalhe /> ```
 * @returns Pagina de detalhes de um personagem
 */
const PaginaDetalhe = () => {
  const [character, setCharacter] = useState<ICharacter>();
  const [episodios, setEpisodios] = useState<iEpisode[]>();

  const { id } = useParams();
  const dispatch = useDispatch()
  const [listEpisodios, setListEpisodios] = useState<string[]>([]);
  const { favoritos } = useSelector(({ fetchFavorites }) => fetchFavorites);
  const isFavorite = favoritos.filter((fav: ICharacter) => fav.id === character?.id).length > 0;

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(response => {
      setCharacter(response.data);
      setListEpisodios(sliceEpisodes(response.data.episode));
    })
  }, [id])
  useEffect(() => {
    if (listEpisodios.length > 0) {
      axios.get(`https://rickandmortyapi.com/api/episode/${listEpisodios}`).then(response => {
        response.data.length > 0 ? setEpisodios(response.data) : setEpisodios(Array(response.data))
      })
    }
  }, [listEpisodios])
  const sliceEpisodes = (episodes: URL[]) => {
    let episodesList: string[] = [];
    episodes.map(episode => {
      episodesList.push(new URL(episode).pathname.split("/")[3])
    });
    return episodesList;
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFav(character?.id))
    } else {
      dispatch(addFav(character && character));
    }
  }
  console.log(episodios)
  return (
    <>
      <Helmet>
        <title>Catálogo | Detalhes</title>
      </Helmet>
      <div className="container">
        <div className={"detalhe"}>
          <div className={"detalhe-header"}>
            <img
              src={character?.image}
              alt={character?.name}
            />
            <div className={"detalhe-header-texto"}>
              <p>Nome: {character?.name}</p>
              <p>Planeta: {character?.origin.name}</p>
              <p>Genero: {character?.gender}</p>
            </div>
            <BotaoFavorito isFavorito={isFavorite} onClick={toggleFavorite} />
          </div>
        </div>
        <h4>Lista de episódios em que o personagem apareceu</h4>
        <div className={"episodios-grade"}>
          {episodios ? episodios.map(({ name, created, episode, id }) => (
            <CardEpisodio key={id} episode={episode} name={name} created={created} />
          )) : <p>Esse personagem não tem participação em nenhum episodio</p>
          }
        </div>
      </div>
    </>
  );
};

export default PaginaDetalhe;
