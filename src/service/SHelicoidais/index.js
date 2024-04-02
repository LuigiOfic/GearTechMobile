// gearUtils.js

export const CalculosHelicoidais = (modulo, anguloInclinacao, numDentes, distanciaEixos) => {
    
  if (!modulo || !anguloInclinacao || !numDentes || !distanciaEixos) {
    return null;
  }

    const Mt = parseFloat(modulo);
    const B = parseFloat(anguloInclinacao);
    const Z = parseInt(numDentes);
    const a = parseFloat(distanciaEixos);
  
    
    //Cálculos
    
    const CirculosPrimitivos = Mt * Z;
    const ModuloNormal = Mt / Math.cos(B);
    const PassoNormal = Math.PI * ModuloNormal; 
    const PassoHelicoidal = PassoNormal / Math.cos(B);
    const DistanciaEntreEixos = CirculosPrimitivos + 2 * ModuloNormal;
  
    return {      
      CirculosPrimitivos: CirculosPrimitivos.toFixed(3),
      ModuloNormal: ModuloNormal.toFixed(3),
      PassoNormal: PassoNormal.toFixed(3),
      PassoHelicoidal: PassoHelicoidal.toFixed(3),
      DistanciaEntreEixos: DistanciaEntreEixos.toFixed(3),
    };
    
  };
  