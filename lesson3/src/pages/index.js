import React, { useState, useEffect } from 'react';
import { unstable_useBlocker, useLinkClickHandler } from 'react-router-dom';
import "../css/counter.css";

const Main = () => {
    const [count, setCount] = useState(0)
    const [activeIndex, setActiveIndex] = useState(0);
    const [num, setNum] = useState(1)

    const [clicker, setClicker] = useState(10)
    const [clickerUp, setClickerUp] = useState(1)

    const [phone, setPhone] = useState(100)
    const [phoneUp, setPhoneUp] = useState(1)

    const [comp, setComp] = useState(700)
    const [compUp, setCompUp] = useState(1)

    const [lap, setLap] = useState(2000)
    const [lapUp, setLapUp] = useState(1)

    const [server, setServer] = useState(4500)
    const [serverUp, setServerUp] = useState(1)

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
                if(clickerUp == 1){
                    if(count >= 10) {
                        setCount(count - clicker)
                        setNum(2)
                        setClicker(15)
                        setClickerUp(2)
                    }
                }
                else if(clickerUp == 2) {
                    if(count >= 15){
                        setCount(count - clicker)
                        setNum(5)
                        setClicker(20)
                        setClickerUp(3)
                    }
                }
                else if(clickerUp == 3) {
                    if(count >= 20){
                        setCount(count - clicker)
                        setNum(10)
                        document.getElementById(tab).disabled = true;
                    }
                }
                break
            case 2:
                if(phoneUp == 1){
                    if(count >= 100) {
                        setCount(count - phone)
                        setNum(15)
                        setPhone(150)
                        setPhoneUp(2)
                    }
                }
                else if(phoneUp == 2) {
                    if(count >= 150){
                        setCount(count - phone)
                        setNum(20)
                        setPhone(250)
                        setPhoneUp(3)
                    }
                }
                else if(phoneUp == 3) {
                    if(count >= 250){
                        setCount(count - phone)
                        setNum(25)
                        document.getElementById(tab).disabled = true;
                    }
                }
                break
            case 3:
                if(compUp == 1){
                    if(count >= 700) {
                        setCount(count - comp)
                        setNum(30)
                        setComp(1200)
                        setCompUp(2)
                    }
                }
                else if(compUp == 2) {
                    if(count >= 1200){
                        setCount(count - comp)
                        setNum(35)
                        setComp(1600)
                        setCompUp(3)
                    }
                }
                else if(compUp == 3) {
                    if(count >= 1600){
                        setCount(count - comp)
                        setNum(40)
                        document.getElementById(tab).disabled = true;
                    }
                }
                break
            case 4:
                if(lapUp == 1){
                    if(count >= 2000) {
                        setCount(count - lap)
                        setNum(50)
                        setLap(2800)
                        setLapUp(2)
                    }
                }
                else if(lapUp == 2) {
                    if(count >= 2800){
                        setCount(count - lap)
                        setNum(55)
                        setLap(3500)
                        setLapUp(3)
                    }
                }
                else if(lapUp == 3) {
                    if(count >= 3500){
                        setCount(count - lap)
                        setNum(60)
                        document.getElementById(tab).disabled = true;
                    }
                }
                break
            case 5:
                if(serverUp == 1){
                    if(count >= 4500) {
                        setCount(count - server)
                        setNum(70)
                        setServer(5800)
                        setServerUp(2)
                    }
                }
                else if(serverUp == 2) {
                    if(count >= 5800){
                        setCount(count - server)
                        setNum(75)
                        setServer(7000)
                        setServerUp(3)
                    }
                }
                else if(serverUp == 3) {
                    if(count >= 7500){
                        setCount(count - server)
                        setNum(100)
                        document.getElementById(tab).disabled = true;
                    }
                }
                break
        }
    }

    return ( 
        <div className="box">
            {count}$
            <Button amount={num}/>
            <div id="mySidepanel" class="sidepanel">
                <a class="closebtn" onClick={() => closeNav()}>&times;</a>
                <button id="1" className='button-menu' onClick={() => Clicker(1)}>Clicker - {clicker}$ - {clickerUp} lvl</button>
                <button id="2" className='button-menu' onClick={() => Clicker(2)}>Phone - {phone}$ - {phoneUp} lvl</button>
                <button id="3" className='button-menu' onClick={() => Clicker(3)}>Old Computer - {comp}$ - {compUp} lvl</button>
                <button id="4" className='button-menu' onClick={() => Clicker(4)}>Laptop - {lap}$ - {lapUp} lvl</button>
                <button id="5" className='button-menu' onClick={() => Clicker(5)}>Server - {server}$ - {serverUp} lvl</button>
            </div>
            <button class="openbtn" onClick={() => openNav()}> <div className='text'>&#9776; Магазин </div></button>
        </div> 
    )
}

export default Main