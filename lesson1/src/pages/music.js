import React from "react";

const Music = () => {
    return (
    <div>
        <div class="container">
            <h1>Måneskin</h1>
            <h3>Участники группы:</h3>
            <dt>Вокалист Дамиано Давид</dt>
            <dt>Басистка Виктория Де Анджелис</dt>
            <dt>Гитарист Томас Раджи</dt>
            <dt>Барабанщик Итан Торкио</dt>
        </div>
        <div class="albums_cont">
            <div class="album">
                <img src='./music1.png' alt="123"></img>
                <h3>Il ballo della vita</h3>
            </div>
            <div class="album">
                <img src='./music2.png' alt="123" ></img>
                <h3>Teatro d'ira: Vol. I </h3>
            </div>
            <div class="album">
                <img src='./music3.png' alt="123"></img>
                <h3>Rush!</h3>
            </div>
        </div>
    </div>
    );
};

export default Music;