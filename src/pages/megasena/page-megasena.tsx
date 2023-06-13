import "./page-megasena-styles.css"
import InfoLoteria from "../../components/info-loteria/info-loteria";
import { UseLoteria } from "../../hooks/useLoteria";
import ResultadosLoteria from "../../components/resultados-loteria/resultados-loteria";

export const PageMegasena = () => {
  const { megasena } = UseLoteria()

  return (
    <>
      <div className="loteriaContainer">
        <InfoLoteria item={megasena} />
        <ResultadosLoteria item={megasena} />
      </div>
    </> 
  )
}