// engrenagemUtils.js

export const Calculos = (modulo, numeroDentes) => {
    if (!modulo || !numeroDentes) {
      return null;
    }
  
    const moduloNum = parseFloat(modulo);
    const numeroDentesNum = parseInt(numeroDentes, 10);

  
    //Cálculos
    
    const circuloPrimitivo = moduloNum * numeroDentesNum;
    const passo = Math.PI * moduloNum;
    const folgaCabeca = 0.167 * moduloNum;
    const alturaCabecaDente = moduloNum;
    const alturaPeDente = moduloNum + folgaCabeca;
    const alturaDente = 2 * moduloNum + folgaCabeca;
    const circuloCabeca = circuloPrimitivo + 2 * moduloNum;
    const circuloPe = circuloPrimitivo - 2 * (moduloNum + folgaCabeca);
    const distanciaEixos = circuloPrimitivo / 2 + circuloPrimitivo / 2;
    const circuloCabecaInterno = circuloPrimitivo - 2 * moduloNum;
    const circuloPeInterno = circuloPrimitivo + 2 * (moduloNum + folgaCabeca);
    const distanciaEixosInterno = (circuloPe - circuloCabeca) / 2;
  
    return {
      circuloPrimitivo: circuloPrimitivo.toFixed(3),
      passo: passo.toFixed(3),
      folgaCabeca: folgaCabeca.toFixed(3),
      alturaCabecaDente: alturaCabecaDente.toFixed(3),
      alturaPeDente: alturaPeDente.toFixed(3),
      alturaDente: alturaDente.toFixed(3),
      circuloCabeca: circuloCabeca.toFixed(3),
      circuloPe: circuloPe.toFixed(3),
      distanciaEixos: distanciaEixos.toFixed(3),
      circuloCabecaInterno: circuloCabecaInterno.toFixed(3),
      circuloPeInterno: circuloPeInterno.toFixed(3),
      distanciaEixosInterno: distanciaEixosInterno.toFixed(3),
    };
  };
  