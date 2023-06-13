import "./page-quina-styles.css"
import InfoLoteria from "../../components/info-loteria/info-loteria";
import { UseLoteria } from "../../hooks/useLoteria";
import ResultadosLoteria from "../../components/resultados-loteria/resultados-loteria";

export const PageQuina = () => {
  const { quina } = UseLoteria()

  return (
    <>
      <div className="loteriaContainer">
        <InfoLoteria item={quina} />
        <ResultadosLoteria item={quina} />
      </div>
    </> 
  )
}