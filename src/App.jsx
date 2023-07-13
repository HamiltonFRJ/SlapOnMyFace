import React from 'react';

const Button = () => {
  function handleClick(event){
    alert('É um prazer te conhecer.')
  }
  window.addEventListener('onClick', handleClick);
  return <button onClick={handleClick}>Clique aqui</button>
}

const Welcome = () =>  {
  return <form>
    <h1>Welcome to the currigame!</h1>
    <p>Tell me, what is your name?</p>
    <input></input>
    <Button onclick={({target}) => target.classList.add('ativo')}/>
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
    </div>
  )
}

export default App
