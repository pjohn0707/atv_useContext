import React, { createContext, useState, useContext } from 'react';
import '../App.css';

// Cria o contexto para o tema
const TemaContexto = createContext();

function Modo_Escuro() {
  // Define o estado inicial do tema como 'claro'
  const [tema, setTema] = useState('claro');

  // Função para alternar entre os temas 'claro' e 'escuro'
  function alternarTema() {
    setTema((temaAnterior) => (temaAnterior === 'claro' ? 'escuro' : 'claro'));
  }

  return (
    // Provedor do contexto que passa o tema e a função de alternância
    <TemaContexto.Provider value={{ tema, alternarTema }}>
      <div className={`app ${tema}`}>
        <header className="app-header">
          <h1>Alternador de Tema React</h1>
          <AlternarTema />
        </header>
      </div>
    </TemaContexto.Provider>
  );
}

function AlternarTema() {
  // Usa o contexto para obter o tema atual e a função de alternância
  const { tema, alternarTema } = useContext(TemaContexto);

  return (
    <button className={`botao ${tema}`} onClick={alternarTema}>
      Tema {tema === 'claro' ? 'Escuro' : 'Claro'}
    </button>
  );
}

export default Modo_Escuro;