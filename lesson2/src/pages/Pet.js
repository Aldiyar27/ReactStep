import React from 'react';

function Pet(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Вид: {props.species}</p>
      <p>Цвет: {props.color}</p>
      <p>Характер: {props.character}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Pet
        name="Имя питомца"
        species="Вид питомца"
        color="Цвет питомца"
        character="Характер питомца"
      />
    </div>
  );
}

export default App;