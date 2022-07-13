import "./botao-favorito.css";
import Star from '../../assets/star.svg';
import StarFilled from '../../assets/star-filled.svg';
import { MouseEvent } from "react";

interface iBotaoFavorito {
  isFavorito: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
}
/**
 * Botao de favorito
 * @property {isFavorito} boolean - Propriedade que indica se o personagem está favorito
 * @property {(e) => void} onClick - Função responsavel por marcar ou desmarcar o personagem como favorito
 * uso:
 * ``` <BotaoFavorito /> ```
 * @returns Botão de favorito
 */
const BotaoFavorito = ({ isFavorito, onClick}: iBotaoFavorito) => {
  const src = isFavorito ? StarFilled : Star;

  return (
    <div onClick={(e) => onClick(e)} className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
