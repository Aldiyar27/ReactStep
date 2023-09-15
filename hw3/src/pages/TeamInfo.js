import React from 'react';
import '../css/TeamInfo.css';

class TeamInfo extends React.Component {
  render() {
    const { players, photo} = this.props;

    return (
      <div className='team'>
        <div className="team-info">
          <h3>Состав команды</h3>
          <ul>
            {players.map((player, index) => (
            <li key={index}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default TeamInfo;