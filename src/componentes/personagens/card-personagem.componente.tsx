import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../interfaces/Character";
import { useSelector } from "../../store";
import { addFav, removeFav } from "../../store/actions/favorite";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

interface iCardPersonagemProps {
  character: ICharacter
}

/**
 * Card de personagem
 * Recebe um personagem e renderiza um card com os dados do personagem
 * @param character - Personagem
 * uso:
 * ``` <CardPersonagem /> ```
 * @returns Card contendo os dados do personagem
 */
const CardPersonagem = ({ character }: iCardPersonagemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { favoritos } = useSelector(({ fetchFavorites }) => fetchFavorites);

  const isFavorite = favoritos.filter((fav: ICharacter) => fav.id === character.id).length > 0;
  const toggleFavorite = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (isFavorite) {
      dispatch(removeFav(character.id))
    } else {
      dispatch(addFav(character));
    }
  }


  return (
    <div className="card-personagem" onClick={() => navigate(`/detalhe/${character.id}`)}>
      <img
        src={character.image}
        alt={character.name}
      />
      <div className="card-personagem-body">
        <span>{character.name}</span>
        <BotaoFavorito isFavorito={isFavorite} onClick={(e) => toggleFavorite(e)} />
      </div>
    </div>
  );
};

export default CardPersonagem;
