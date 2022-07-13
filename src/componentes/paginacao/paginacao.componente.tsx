import "./paginacao.css";

interface iPaginacaoProps {
  page: number,
  disabledNext: boolean,
  onChange: (page: number) => void
}
/**
 * @property {number} page
 * @property {boolean} disabledNext
 * @property {(page: number) => void} onChange
 * @returns Botões de paginação
 */
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
