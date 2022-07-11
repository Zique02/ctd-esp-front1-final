import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { ICharacter } from "../../interfaces/Character";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento tsx
 */
interface iGradePersonagemProps {
  characters: ICharacter[] | null
}
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
