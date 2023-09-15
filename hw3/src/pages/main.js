import React from 'react';
import ClubInfo from './ClubInfo.js';
import Achievements from './Achievements.js';
import TeamInfo from './TeamInfo.js';

class ClubInfoApp extends React.Component {
  render() {
    const clubData = {
      name: 'Пари Сен-Жермен',
      city: 'Париж',
      foundationDate: '1970 году',
      rang: '4-е место в рейтинге УЕФА',
      emblem: './img/logo.png',
      info_pszh: '«Пари Сен-Жермен» одиннадцать раз становился чемпионом Франции, четырнадцать раз выигрывал Кубок Франции и десять раз — Кубок французской лиги.',
      achiv_1: 'Чемпион (11, рекорд), Серебряный призёр (9), Бронзовый призёр (3)',
      achiv_2: 'Финалист: 2020 ',
      achiv_3: 'Победитель: 1996',
      players: ['Вр - Кейлор Наваc - 1986', 
      'Вр - Серхио Рико - 1993', 
      'Защ - Ашраф Хакими - 1998',
      'Защ - Преснель Кимпембе - 1995',
      'Защ - Маркиньос (капитан) - 1994',
      'Защ - Хуан Бернат - 1993',
      'ПЗ - Мануэль Угарте - 2001',
      'ПЗ - Фабиан Руис - 1996',
      'ПЗ - Марко Асенсио - 1996',
      'Нап - Килиан Мбаппе -  1998',
      'Нап - Усман Дембеле - 1997',
      'Нап - Рандаль Коло Муани	- 1998',
    ],
    };

    return (
      <div className="club-info-app">
        <ClubInfo {...clubData} />
        <Achievements {...clubData} />
        <TeamInfo players={clubData.players} />
      </div>
    );
  }
}

export default ClubInfoApp;
