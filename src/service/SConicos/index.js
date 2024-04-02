// projetoUtils.js

export const calcularValores = (modulo, numeroDentes) => {
    const moduloFloat = parseFloat(modulo);
    const numeroDentesInt = parseInt(numeroDentes);
  
    if (isNaN(moduloFloat) || isNaN(numeroDentesInt)) {
      return "Por favor, insira valores válidos para os parâmetros.";
    }
  
    const diametroCoroa = moduloFloat * numeroDentesInt;
    const passoAxial = Math.PI * moduloFloat;
    const raioTopoCoroa = 0.35 * moduloFloat;
    const diametroPrimitivo = diametroCoroa + 2 * raioTopoCoroa;
    const passoCoroa = Math.PI * moduloFloat;
    const diametroExterno = diametroPrimitivo + 2 * moduloFloat;
    const raioTopoCoroa2 = 1.25 * raioTopoCoroa;
    const parafusoSemFim = diametroPrimitivo / moduloFloat;
    const passoAxialParafuso = Math.PI * moduloFloat;
    const alturaElevacao = 0.5 * moduloFloat;
  
    return {
      diametroCoroa: diametroCoroa.toFixed(3),
      passoAxial: passoAxial.toFixed(3),
      raioTopoCoroa: raioTopoCoroa.toFixed(3),
      diametroPrimitivo: diametroPrimitivo.toFixed(3),
      passoCoroa: passoCoroa.toFixed(3),
      diametroExterno: diametroExterno.toFixed(3),
      raioTopoCoroa2: raioTopoCoroa2.toFixed(3),
      parafusoSemFim: parafusoSemFim.toFixed(3),
      passoAxialParafuso: passoAxialParafuso.toFixed(3),
      alturaElevacao: alturaElevacao.toFixed(3),
    };
  };
  