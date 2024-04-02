//Auth -> index.js

// Useuários
const Professor = {
    nome: 'Vladmir',
    nif: '123',
    senha: '111',
  };
  
  export const loginUser = (nif, senha) => {
    if (nif === Professor.nif && senha === Professor.senha) {
      return true; 
    } else {
      return false; 
    }
  };
  