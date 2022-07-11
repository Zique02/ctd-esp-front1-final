import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento tsx
 */
interface iPaginacaoProps {
  page: number,
  disabledNext: boolean,
  onChange: (page: number) => void
}
const Paginacao = ({ page, disabledNext, onChange }: iPaginacaoProps) => {

  return (
    <div className="paginacao">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)} className={"primary"}>
        Anterior
      </button>
      <button disabled={disabledNext} onClick={() => onChange(page + 1)} className={"primary"}>
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
