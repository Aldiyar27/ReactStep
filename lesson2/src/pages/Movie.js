import React from 'react';

function Movie(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>Режиссер: {props.director}</p>
      <p>Год выпуска: {props.year}</p>
      <p>Киностудия: {props.studio}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Мой любимый фильм</h1>
      <Movie
        title="Заголовок фильма"
        director="Имя режиссера"
        year="Год выпуска"
        studio="Киностудия"
      />
    </div>
  );
}

export default App;