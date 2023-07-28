import React from 'react';

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
  </form>
}

const App = () => {
  const selecionado = proprietario.clientes[0]; // Selecione o cliente alterando o número na constante

  // Obtem o tatal de valores gastos pelo cliente, transformando string em number e somando
  const totalGasto = selecionado.ultimasCompras
    .map((item) => Number(item.valor.replace('R$ ', '')))// Troca da String para Number
    .reduce((a, b) => a + b);

  return (
    <div>
      <Welcome />

      <p>Nome: {selecionado.nome}</p>
      <p>Idade: {selecionado.idade}</p>
      <p>Comprador: <span style={{color: selecionado.status ? 'green' : 'red'}}>{selecionado.status ? 'Ativo' : 'Inativo'}</span></p>
      <p>Ultima compra: R$ {totalGasto}</p>
      <p style={{display: totalGasto <= 3000 ? '' : ''}}><span>Situação: Alto gasto</span></p>
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
    status: true,
    },
    {
    nome: 'Joao',
    idade: '24',
    ultimasCompras: [ 
    {item: 'capa de couro para banco', valor: 'R$ 2500'},
    {item: 'limpador de parabrisa', valor: 'R$ 100'},
    ],
    status: false,
    },
    {
    nome: 'Ana',
    idade: '25',
    ultimasCompras: [ 
    {item: 'cheiro para interior', valor: 'R$ 20'},
    {item: 'servico pintura completa - prata', valor: 'R$ 4000'},
    ],
    status: false,
    },
  ]
}

export default App
