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
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */
const character = {
  "id": 1,
  "name": "Rick Sanchez",
  "status": "Alive",
  "species": "Human",
  "type": "",
  "gender": "Male",
  "origin": {
    "name": "Earth (C-137)",
    "url": "https://rickandmortyapi.com/api/location/1"
  },
  "location": {
    "name": "Citadel of Ricks",
    "url": "https://rickandmortyapi.com/api/location/3"
  },
  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "episode": [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
    "https://rickandmortyapi.com/api/episode/3",
    "https://rickandmortyapi.com/api/episode/4",
    "https://rickandmortyapi.com/api/episode/5",
    "https://rickandmortyapi.com/api/episode/6",
    "https://rickandmortyapi.com/api/episode/7",
    "https://rickandmortyapi.com/api/episode/8",
    "https://rickandmortyapi.com/api/episode/9",
    "https://rickandmortyapi.com/api/episode/10",
    "https://rickandmortyapi.com/api/episode/11",
    "https://rickandmortyapi.com/api/episode/12",
    "https://rickandmortyapi.com/api/episode/13",
    "https://rickandmortyapi.com/api/episode/14",
    "https://rickandmortyapi.com/api/episode/15",
    "https://rickandmortyapi.com/api/episode/16",
    "https://rickandmortyapi.com/api/episode/17",
    "https://rickandmortyapi.com/api/episode/18",
    "https://rickandmortyapi.com/api/episode/19",
    "https://rickandmortyapi.com/api/episode/20",
    "https://rickandmortyapi.com/api/episode/21",
    "https://rickandmortyapi.com/api/episode/22",
    "https://rickandmortyapi.com/api/episode/23",
    "https://rickandmortyapi.com/api/episode/24",
    "https://rickandmortyapi.com/api/episode/25",
    "https://rickandmortyapi.com/api/episode/26",
    "https://rickandmortyapi.com/api/episode/27",
    "https://rickandmortyapi.com/api/episode/28",
    "https://rickandmortyapi.com/api/episode/29",
    "https://rickandmortyapi.com/api/episode/30",
    "https://rickandmortyapi.com/api/episode/31",
    "https://rickandmortyapi.com/api/episode/32",
    "https://rickandmortyapi.com/api/episode/33",
    "https://rickandmortyapi.com/api/episode/34",
    "https://rickandmortyapi.com/api/episode/35",
    "https://rickandmortyapi.com/api/episode/36",
    "https://rickandmortyapi.com/api/episode/37",
    "https://rickandmortyapi.com/api/episode/38",
    "https://rickandmortyapi.com/api/episode/39",
    "https://rickandmortyapi.com/api/episode/40",
    "https://rickandmortyapi.com/api/episode/41",
    "https://rickandmortyapi.com/api/episode/42",
    "https://rickandmortyapi.com/api/episode/43",
    "https://rickandmortyapi.com/api/episode/44",
    "https://rickandmortyapi.com/api/episode/45",
    "https://rickandmortyapi.com/api/episode/46",
    "https://rickandmortyapi.com/api/episode/47",
    "https://rickandmortyapi.com/api/episode/48",
    "https://rickandmortyapi.com/api/episode/49",
    "https://rickandmortyapi.com/api/episode/50",
    "https://rickandmortyapi.com/api/episode/51"
  ],
  "url": "https://rickandmortyapi.com/api/character/1",
  "created": new Date()
}


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
    return episodesList.slice(0, 3);
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFav(character?.id))
    } else {
      dispatch(addFav(character && character));
    }
  }
  return (
    <>
      <Helmet>
        <title>Rick and morty | Nome</title>
      </Helmet>
      <div className="container">
        <h3>Rick Sanchez</h3>
        <div className={"detalhe"}>
          <div className={"detalhe-header"}>
            <img
              src={character?.image}
              alt={character?.name}
            />
            <div className={"detalhe-header-texto"}>
              <p>{character?.name}</p>
              <p>{character?.location.name}</p>
              <p>{character?.gender}</p>
            </div>

            <BotaoFavorito isFavorito={isFavorite} onClick={toggleFavorite} id={character ? character.id : 0} />
          </div>
        </div>
        <h4>Lista de episódios em que o personagem apareceu</h4>
        <div className={"episodios-grade"}>
          {episodios ? episodios.map(({ name, lancamento, episode, id }) => (
            <CardEpisodio key={id} episode={episode} name={name} lancamento={lancamento} />
          )) : <p>Esse personagem não tem participação em nenhum episodio</p>
          }
        </div>
      </div>
    </>
  );
};

export default PaginaDetalhe;
