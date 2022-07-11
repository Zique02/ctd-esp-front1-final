import "./botao-favorito.css";
import Star from '../../assets/star.svg';
import StarFilled from '../../assets/star-filled.svg';
/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Terá que tipar as propriedades se utilizar este componente
 *
 *
 * @returns Elemento tsx
 */

interface iBotaoFavorito {
  isFavorito: boolean;
  onClick: (id: number) => void;
  id: number;
}
const BotaoFavorito = ({ isFavorito, onClick, id }: iBotaoFavorito) => {
  const src = isFavorito ? StarFilled : Star;

  return (
    <div onClick={() => onClick(id)} className="botao-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default BotaoFavorito;
