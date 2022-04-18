import React from 'react';
import {useDispatch} from "react-redux";

const TodoItems = ({el}) => {

    const dispatch = useDispatch()

    const handleCost = (sum) => {
        sum = el.itemsPrice
        console.log(sum)
       return dispatch({type: "Minus", payload: sum})
    }

    return (
        <div key={el.id} style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <li style={{margin:'10px 120px', listStyle:'none'}}>{el.itemsName} <span>{el.itemsPrice} som</span></li>
            <button onClick={handleCost} style={{margin:'10px 120px'}}>Buy</button>
        </div>
    );
};

export default TodoItems;