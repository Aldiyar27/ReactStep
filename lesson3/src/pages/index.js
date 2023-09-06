import React, { useState, useEffect } from 'react';
import "../css/counter.css";

const Main = () => {
    const [count, setCount] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0);

    function clickMe(amount, sign){
        switch(sign){
            case "+":
                setCount(count + amount)
                break
            case "-":
                setCount(count - amount)
                break
        }
    }

    function Button(props){
        return (
            <button className="button" onClick={() => clickMe(props.amount, props.sign)}>
                <div class="rotate-block">
                    <div class="change-img">
                        <div class="front-side-img"><img src="сoin.png" alt=""/></div>
                        <div class="back-side-img"><img src="coin.png" alt=""/></div>
                    </div>
                </div>
            </button>
        )
    }

    function openNav() {
        document.getElementById("mySidepanel").style.height = "600px";
        document.querySelector(".closebtn").style.display = 'block';
    }
      
      /* Установите ширину боковой панели в 0 (скройте ее) */
      function closeNav() {
        document.getElementById("mySidepanel").style.height = "0";
        document.querySelector(".closebtn").style.display = 'none';
    }
      
    return ( 
        <div className="box">
            {count}
            <Button amount={1} sign={'+'} />
            <div id="mySidepanel" class="sidepanel">
                <a class="closebtn" onClick={() => closeNav()}>&times;</a>
                <button className='button-menu'></button>
                <button className='button-menu'></button>
                <button className='button-menu'></button>
            </div>
            <button class="openbtn" onClick={() => openNav()}> <div className='text'>&#9776; Магазин </div></button>
        </div> 
    )
}

export default Main