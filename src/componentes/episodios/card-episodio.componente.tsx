import "./card-episodio.css";

/**
 * Card para cada episódio na visualização do personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos episódios
 *
 *
 * @returns Elemento tsx
 */
interface iCardEpisodioProps {
  name: string;
  episode: string;
  lancamento: string;
}
const CardEpisodio = ({episode, name, lancamento}:iCardEpisodioProps) => {
  return (
    <div className="card-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>Lançado em: {lancamento}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
