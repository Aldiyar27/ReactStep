import React, { useState, useEffect } from 'react';
import { useLinkClickHandler } from 'react-router-dom';
import "../css/counter.css";

const Main = () => {
    const [count, setCount] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0);
    const [num, setNum] = useState(1)

    function clickMe(amount){
        setCount(count + amount)
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
      
    function Clicker(tab){
        switch(tab){
            case 1:
                if(count >= 20){
                    setCount(count - 20)
                    setNum(10)
                }
                break
            case 2:
                if(count >= 100){
                    setCount(count - 100)
                    setNum(25)
                }
                break
            case 3:
                if(count >= 700){
                    setCount(count - 700)
                    setNum(35)
                }
                break
            case 4:
                if(count >= 1500){
                    setCount(count - 1500)
                    setNum(50)
                }
                break
            case 5:
                if(count >= 2500){
                    setCount(count - 2500)
                    setNum(70)
                }
                break
        }
    }

    return ( 
        <div className="box">
            {count}
            <Button amount={num}/>
            <div id="mySidepanel" class="sidepanel">
                <a class="closebtn" onClick={() => closeNav()}>&times;</a>
                <button className='button-menu' onClick={() => Clicker(1)}>Clicker - 20$</button>
                <button className='button-menu' onClick={() => Clicker(2)}>Phone - 100$</button>
                <button className='button-menu' onClick={() => Clicker(3)}>Old Computer - 700$</button>
                <button className='button-menu' onClick={() => Clicker(4)}>Laptop - 1500$</button>
                <button className='button-menu' onClick={() => Clicker(5)}>Server - 2500$</button>
            </div>
            <button class="openbtn" onClick={() => openNav()}> <div className='text'>&#9776; Магазин </div></button>
        </div> 
    )
}

export default Main