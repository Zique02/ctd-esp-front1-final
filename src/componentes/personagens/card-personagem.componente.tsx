import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ICharacter } from "../../interfaces/Character";
import { useSelector } from "../../store";
import { addFav, removeFav } from "../../store/actions/favorite";
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";

/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
 *
 * @returns Elemento tsx
 */
interface iCardPersonagemProps {
  character: ICharacter
}

const CardPersonagem = ({ character }: iCardPersonagemProps) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { favoritos } = useSelector(({ fetchFavorites }) => fetchFavorites);

  const isFavorite = favoritos.filter((fav: ICharacter) => fav.id === character.id).length > 0;
  const toggleFavorite = () => {
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
        <BotaoFavorito isFavorito={isFavorite} onClick={toggleFavorite} id={character.id} />
      </div>
    </div>
  );
};

export default CardPersonagem;
