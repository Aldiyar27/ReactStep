import React from "react";
import { useState } from "react";
import "../css/counter.css";

const Main = () => {
    const [count, setCount] = useState(0)

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
            <button className="blue" onClick={() => clickMe(props.amount, props.sign)}>
                {props.sign}{props.amount}
            </button>
        )
    }

    return ( 
        <div className="box">
            {count}
            <Button amount={1} sign={'+'} />
        </div> 
    )
}

export default Main