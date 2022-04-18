import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const money = useSelector((store) => {
        return store.money
    })
    const dispatch = useDispatch()

    const addMoney = (sum) =>{
        return dispatch({type: "Add money",payload: sum})
    }
    const takeMoney = (sum) =>{
        return dispatch({type: "Take money",payload: sum})
    }


    return (
        <>
            <div style={{textAlign: 'center', display:'flex', justifyContent:'center', alignItems:'center',}}>
                <button style={{margin:'0 20px'}} onClick={() => addMoney(+prompt( 'Type your number'))}>+</button>
                <h1>{money}</h1>
                <button  style={{margin:'0 20px'}} onClick={() => takeMoney(+prompt('Type your number'))}>-</button>
            </div>
        </>
    );
};

export default Counter;