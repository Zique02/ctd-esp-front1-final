import "./card-episodio.css";

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
interface iCardEpisodioProps {
  name:       string;
  episode:    string;
  created:    string;
}
/**
 * Card de episódio
 * Recebe um episódio e renderiza um card com os dados do episódio
 * @property {string} name - Nome do episódio
 * @property {string} episode - Número do episódio
 * @property {string} lancamento - Data de lançamento
 * uso:
 * ``` <CardEpisodio /> ```
 * @returns Card contendo os dados do episódio
 */
const CardEpisodio = ({ episode, name, created }: iCardEpisodioProps) => {
  const date = new Date(created);
  return (
    <div className="card-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episode}</span>
        <span>Lançado em: {monthNames[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</span>
      </div>
    </div>
  );
};

export default CardEpisodio;
