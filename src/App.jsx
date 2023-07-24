import React from 'react';

const Button = () => {
  let status = true;

  function handleClick(){
    status = !status;
  }
  window.addEventListener('onClick', handleClick);
  return <button onClick={handleClick()} className={status ? 'active' : 'unactive'}>Click here!</button>
}

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
    <p>Tell me, what is your name?</p>
    <input></input>
    <Button />
    <Representation name='Wilson'></Representation>
  </form>
}

const Representation = (properties) => {
  return <h2>My name is Hamilton, nice to meet you {properties.name} </h2>
}

const App = () => {
  return (
    <div>
      <Welcome />

      <h2>My car:</h2>
      <ul style={styleCarList}>
        <li>Marca: {carro.marca}</li>
        <li>Modelo: {carro.modelo}</li>
        <li>Cor: {carro.cor}</li>
      </ul>
    </div>
  )
}

const carro = {
  marca: 'Ford',
  modelo: 'Ka',
  cor: 'preto',
}

const styleCarList  = {
  color: 'blue',
  fontSize: '20px',
  fontFamily: 'TimesNewRoman'
}

export default App
