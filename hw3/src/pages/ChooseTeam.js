import React from 'react';
import '../css/ChooseTeam.css';

const ChooseTeam = () => {
    function PSG(){
        localStorage.setItem('team_index', '0');
    }

    function BAR(){
        localStorage.setItem('team_index', '1');
    }

    return (
        <div className='main'>
            <h2>Выберите команду: </h2>
            <div className='buttons'>
                <a href='/main'>
                    <button onClick={PSG}>ПСЖ</button>
                    <button onClick={BAR}>Барселона</button>
                </a>
            </div>
        </div>
    );
};

export default ChooseTeam;