import "./filtros.css";

interface iFiltros {
  title: string;
  handleFilter: (title: string) => void;
}
/**
 * @property {(title: string) => void} handleFilter funcão que recebe o título do filtro e filtra os personagens
 * @returns 
 */
const Filtros = ({ title, handleFilter }: iFiltros) => {

  return (
    <div className="filtros">
      <label htmlFor="nome">Filtrar por nome:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        id="nome"
        name="nome"
        value={title}
        onChange={(e) => handleFilter(e.target.value)}
      />
    </div>
  );
};

export default Filtros;
