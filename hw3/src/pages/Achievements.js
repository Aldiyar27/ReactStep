import React from 'react';
import '../css/Achievements.css';

class Achievements extends React.Component {
  render() {
    const { info_pszh, achiv_2, achiv_3} = this.props;

    return (
      <div className="achievements">
        <h3>Достижения клуба</h3>
        <p>{info_pszh}</p>
        <h4>Международные титулы</h4>
        <p>Лига чемпионов УЕФА: {achiv_2}</p>
        <p>Кубок обладателей кубков УЕФА: {achiv_3}</p>
      </div>
    );
  }
}

export default Achievements;