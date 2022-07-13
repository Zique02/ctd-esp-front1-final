import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { ICharacter } from "../../interfaces/Character";

interface iGradePersonagemProps {
  characters: ICharacter[] | null
}

/**
 * Grade de personagens
 * Recebe um array de personagens e renderiza um card para cada um
 * @param characters - Array de personagens
 * uso:
 * ``` <GradePersonagens /> ```
 *
 * @returns Elemento tsx
 */
const GradePersonagem = ({characters}: iGradePersonagemProps) => {
  return (
    <div className="grade-personagens">
      {characters && characters.map((character : ICharacter) => (
        <CardPersonagem key={character.id} character={character} />
      ))}
    </div>
  );
};

export default GradePersonagem;
