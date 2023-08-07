import React from 'react';

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
  </form>
}

const PersonalData = () => {
  const personal = client.personalInfo;

  return console.log(personal);
}

const App = () => {
  // Obtem o tatal de valores gastos pelo cliente, transformando string em number e somando
  const totalGasto = client.shopping
    .map((item) => Number(item.price.replace('R$ ', '')))// Troca da String para Number
    .reduce((a, b) => a + b);

  return (
    <div>
      <Welcome />
      <PersonalData />
    </div>
  )
}

const client = {
  personalInfo: [
    {
      name: "Hamilton",
      secondName: "Francisco",
      age: 22,
      mail: "hrfj@hfrj.com",
      maritalStatus: "single",
    }
  ],
  paymentHistoric: [
    {
      ticketId: 27361782,
      inTime: true,
    },
    {
      ticketId: 12986381,
      inTime: true,
    },
    {
      ticketId: 24893169,
      inTime: true,
    },
    {
      ticketId: 9821836,
      inTime: true,
    }
  ],
  shopping: [ 
    {
      item: 'kit de pneus phirelli', price: 'R$ 2200', ticketId: 27361782,
    },
    {
      item: 'kit multimidia', price: 'R$ 1500', ticketId: 12986381,
    },
    {
      item: 'limpador de parabrisa', price: 'R$ 100', ticketId: 24893169,
    },
    {
      item: 'cheiro para interior', price: 'R$ 20', ticketId: 9821836,
    }
  ]
}

export default App
