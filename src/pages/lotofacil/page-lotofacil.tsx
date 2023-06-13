import "./page-lotofacil-styles.css"
import InfoLoteria from "../../components/info-loteria/info-loteria";
import { UseLoteria } from "../../hooks/useLoteria";
import ResultadosLoteria from "../../components/resultados-loteria/resultados-loteria";

export const PageLotofacil = () => {
  const { lotofacil } = UseLoteria()

  return (
    <>
      <div className="loteriaContainer">
        <InfoLoteria item={lotofacil} />
        <ResultadosLoteria item={lotofacil} />
      </div>
    </> 
  )
}