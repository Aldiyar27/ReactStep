import React from 'react';
import '../css/ClubInfo.css';

class ClubInfo extends React.Component {
  render() {
    const { name, city, foundationDate, rang, emblem} = this.props;

    return (
      <div className="club-info">
        <h2>{name}</h2>
        <p>Город: {city}</p>
        <p>Дата основания: {foundationDate}</p>
        <p>Рейтинг: {rang}</p>
        <img src={emblem} alt="Герб клуба" />
      </div>
    );
  }
}

export default ClubInfo;