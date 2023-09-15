import React from 'react';

function PersonalPage(props) {
  return (
    <div>
      <h1>Персональная страница</h1>
      <p>ФИО: {props.fullName}</p>
      <p>Телефон: {props.phoneNumber}</p>
      <p>Email: {props.email}</p>
      <p>Город: {props.city}</p>
      <p>Опыт работы: {props.experience}</p>
      <p>Навыки: {props.skills.join(', ')}</p>
      <img src={props.photoUrl} alt="Фотография" />
    </div>
  );
}

function App() {
  return (
    <div>
      <PersonalPage
        fullName="Ваше ФИО"
        phoneNumber="Ваш номер телефона"
        email="Ваш email"
        city="Ваш город"
        experience="Ваш опыт работы"
        skills={['Навык 1', 'Навык 2']}
        photoUrl="URL фотографии"
      />
    </div>
  );
}

export default App;