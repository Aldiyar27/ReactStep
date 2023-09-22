import React from 'react';
import ClubInfo from './ClubInfo.js';
import Achievements from './Achievements.js';
import TeamInfo from './TeamInfo.js';

class ClubInfoApp extends React.Component {
  render() {
    const PSG = {
      name: 'Пари Сен-Жермен',
      city: 'Париж',
      foundationDate: '1970 году',
      rang: '4-е место в рейтинге УЕФА',
      emblem: './img/PSG.png',
      info_pszh: '«Пари Сен-Жермен» одиннадцать раз становился чемпионом Франции, четырнадцать раз выигрывал Кубок Франции и десять раз — Кубок французской лиги.',
      achiv_2: 'Финалист: 2020 ',
      achiv_3: 'Победитель: 1996',
      players: ['Вр - Кейлор Наваc - 1986', 
      'Защ - Ашраф Хакими - 1998',
      'Защ - Преснель Кимпембе - 1995',
      'ПЗ - Мануэль Угарте - 2001',
      'Нап - Килиан Мбаппе -  1998',
      'Нап - Усман Дембеле - 1997',
    ],
    };

    const BAR = {
      name: 'Барсело́на',
      city: 'Барселона',
      foundationDate: '29 ноября 1899',
      rang: '	29 ноября 1899',
      emblem: './img/BAR.png',
      info_pszh: 'Испанский профессиональный футбольный клуб из одноимённого города, самый титулованный клуб Испании и топ-5 чемпионатов. Основан в 1899 году группой швейцарских, британских, испанских и каталонских футболистов во главе с Жоаном Гампером.',
      achiv_2: 'Обладатель(5): 1992, 2006, 2009, 2011, 2015',
      achiv_3: 'Обладатель (4, рекорд): 1979, 1982, 1989, 1997',
      players: ['Вр - Марк-Андре тер Штеген - 1992', 
      'Защ - Алехандро Бальде - 2003',
      'Защ - Жуан Канселу - 1994',
      'ПЗ - 	Гави	2004',
      'Нап - 	Ферран Торрес	2000',
      'Нап - 	Роберт Левандовский	1988',
    ],
    };

    const Clubs = [PSG, BAR];

    let index = localStorage.getItem('team_index')
    return (
      <div className="club-info-app">
        <ClubInfo {...Clubs[index]} />
        <Achievements {...Clubs[index]} />
        {/* <TeamInfo players={Clubs[index].players} /> */}
      </div>
    );
  }
}

export default ClubInfoApp;
