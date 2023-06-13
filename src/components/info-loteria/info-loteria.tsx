import logolotofacil from "../../assets/trevo-lotofacil.png";
import logomegasena from "../../assets/trevo-megasena.png";
import logoquina from "../../assets/trevo-quina.png";
import { Props } from "../../types";
import "./info-loteria-styles.css"

const InfoLoteria = (props: any) => {

  const loteria: Props = props.item
  const title = loteria.tipoJogo === 'MEGA_SENA' ? 'MEGA-SENA' : loteria.tipoJogo === 'QUINA' ? 'QUINA' : 'LOTOFÁCIL'
  const logo = loteria.tipoJogo === 'MEGA_SENA' ? logomegasena : loteria.tipoJogo === 'QUINA' ? logoquina : logolotofacil
  const colorStyle = loteria.tipoJogo === 'MEGA_SENA' ? { "color" : "#209869" } : loteria.tipoJogo === 'QUINA' ? { "color": "#260085" } : { "color" : "#930089" }

  function converterValor(value: number) {
    return value.toLocaleString("pt-br", { style: "currency", currency: "BRL"})
  }
  
  return (
    <>
      <div className="info-loteriaWrapper">
        <img src={logo} alt="" />
        <h1 style={colorStyle}>{title}</h1>

        <p>
          Estimativa de prêmio do próximo concurso. Sorteio em {loteria.dataProximoConcurso}:
        </p>
        <h3 style={colorStyle}>{converterValor(loteria.valorEstimadoProximoConcurso)}</h3>
      </div>
    </>
  );
};

export default InfoLoteria;
