import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import TodoItems from "./TodoItems";

const LikeTodo = () => {

    const [itemName, setItemName] = useState('')
    const [itemPrise, setItemPrice] = useState(0)
    const [items, setItems] = useState([])


    const balance = useSelector(store => store.balance)
    const spendMoney = useSelector(store => store.spendMoney)

    const dispatch = useDispatch()
    console.log(dispatch)

    const handleChange = (e) => {
        setItemName(e.target.value)
    }

    const handleChangePrice = (e) => {
        setItemPrice(e.target.value)
    }

    const handleCreate = () => {
        if (itemName.trim() && itemPrise.trim()){
            const itemsObj = {
                id: items.length ? items[items.length - 1].id + 1 : 1,
                itemsName: itemName,
                itemsPrice:  Number(itemPrise)
            }
            setItems([...items, itemsObj])
        }
    }


    return (
        <>
            <div style={{margin: '50px 500px'}}>
                <h1>Your balance: {balance} som</h1>
                <h2>Your cost: {spendMoney} som</h2>
            </div>

            <div style={{margin: '50px 500px', display: 'flex'}}>
                <input onChange={handleChange} style={{margin: '0 20px'}} type="text"
                       placeholder='Type something for purchasing'/>
                <input onChange={handleChangePrice} style={{margin: '0 20px'}} type="text" placeholder='Type price'/>
                <div>
                    <button onClick={handleCreate}>See</button>
                </div>
            </div>
            <div>
                <ul>
                    {
                        items.map(el => (
                           <TodoItems key={el.id} el={el}/>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default LikeTodo;