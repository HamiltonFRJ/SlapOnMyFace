import React from 'react';

const Button = () => {

  const styledButton = {
    color: "white",
    fontSize: "1.5rem",
    backgroundColor: "blue",
    fontStyle: "Times New Roman",
  }
  function handleClick(){
    return ativo = false;
  }

  let ativo = true;


  return <button className={ativo ? "active" : "unactive"} onClick={handleClick()}>Olá</button>
}

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
  </form>
}

const App = () => {
  return (
    <div>
      <Welcome />

      <h2>Hamilton`s car:</h2>
      <ul style={styleCarList}>
        <li>Marca: {carro.marca}</li>
        <li>Modelo: {carro.modelo}</li>
        <li>Cor: {carro.cor}</li>
      </ul>
    </div>
  )
}

const ApresentacaoCarro = () => {
  return (
  <div>
    <p></p>
  </div>
  )
}

const carro = {
  marca: 'Ford',
  modelo: 'Ka',
  cor: 'preto',
  ano: '2012',
  versao: '1.6',
  interessados: [ 
    {nome: 'Hamilton', idade: '22'},
    {nome: 'Joao', idade: '24'},
    {nome: 'Ana', idade: '25'}
  ],
  status: 'vendido',
}

const proprietario = {
  clientes: [
    {
    nome: 'Hamilton',
    idade: '22',
    ultimasCompras: [ 
    {item: 'kit de pneus phirelli', valor: 'R$ 2200'},
    {item: 'kit multimidia', valor: 'R$ 1500'},
    ],
    comprador: 'ativo',
    },
    {
    nome: 'Joao',
    idade: '24',
    ultimasCompras: [ 
    {item: 'capa de couro para banco', valor: 'R$ 2500'},
    {item: 'limpador de parabrisa', valor: 'R$ 100'},
    ],
    comprador: 'inativo',
    },
    {
    nome: 'Ana',
    idade: '25',
    ultimasCompras: [ 
    {item: 'cheiro para interior', valor: 'R$ 20'},
    {item: 'servico pintura completa - prata', valor: 'R$ 4000'},
    ],
    comprador: 'inativo',
    },
  ]
}

const styleCarList  = {
  color: 'white',
  fontSize: '20px',
  fontFamily: 'TimesNewRoman',
  backgroundColor: 'black',
  borderRadius: '0.05rem',
}

export default App
