import React from 'react';

const client = {
  personalInfo: {
      name: "Hamilton",
      secondName: "Francisco",
      age: 22,
      gender: "male",
      mail: "hrfj@hfrj.com",
      maritalStatus: "single",
  },
  paymentHistoric: [
    {
      ticketId: "27361782",
      inTime: true,
    },
    {
      ticketId: "12986381",
      inTime: true,
    },
    {
      ticketId: "24893169",
      inTime: true,
    },
    {
      ticketId: "9821836",
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

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
  </form>
}

const PersonalData = () => {
  const {name, secondName, age, mail} = client.personalInfo;

  return (
    <div>
      <p>Client: {name + ' ' + secondName}</p>
      <p>Age: {age}</p>
      <p>Contact: {mail}</p>
    </div>
  )
}

const Historic = () => {
  const {gender} = client.personalInfo;

  // Obtem o tatal de valores gastos pelo cliente, transformando string em number e somando
  const totalGasto = client.shopping
    .map((item) => Number(item.price.replace('R$ ', '')))// Troca da String para Number
    .reduce((a, b) => a + b);

  const shoppingTickets = client.paymentHistoric
    .map((item) => item.inTime ? true : false)
    .reduce((a, b) => a * b);

  const lastBoughts = client.shopping
    .map((item) => <li>{item.item} - {item.price}</li>);

  return (
  <div>
    <h2>Last Boughts</h2>
    <ul>
      {lastBoughts}
    </ul>
    <h3 style={{color: shoppingTickets ? "green" : "red", fontWeight: "bold"}}>
  {gender === "female" ? "She" : "He"} is a {shoppingTickets ? 'good payer' : 'bad buyer'}
    </h3>
      <h3 style={{fontWeight: "bold"}}>Total value spent</h3>
      <p style={{color: totalGasto > 3500 ? "green" : "yellow", backgroundColor:"black", fontWeight: "bold"}}>R$ {totalGasto}</p>
  </div>
  )
}

const CheckBoughts = () => {
  const payments = client.paymentHistoric
  .map((ticket) => Number(ticket.ticketId));

  const boughts = client.shopping
  .map((ticket) => Number(ticket.ticketId));

  const VerifyTickets = () => {
    for (let i = 0; i < boughts.length; i++){
      if(boughts[i] !== payments[i]){
        return false;
      }
    }
    return true;
  }
  
  return (
  <div>
    <h1>The last boughts ID`s of user was verified</h1>
    <h3 style={{color: VerifyTickets() ? "green" : "red", fontWeight: "bold"}}>
      {VerifyTickets() ? "User up to date!" : "Theres something wrong!"}
    </h3>
  </div>
  )
}

const App = () => {

  return (
    <div>
      <Welcome />
      <PersonalData />
      <Historic />
      <CheckBoughts />
    </div>
  )
}

export default App
