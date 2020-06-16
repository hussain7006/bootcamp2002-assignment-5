import React,{useContext} from 'react';
import CounterContext from './CounterContext'
const Child = () => {

    let Counter = useContext(CounterContext);
    return (
        <div>
            <h2>This is Counter Context</h2>
            <h2>Counter value: {Counter[0]} </h2>
            <div className = "childButtons">
                <button onClick={ () => Counter[1](--Counter[0]) }>-</button>
                <button onClick={ () => Counter[1](0) }>Reset</button>
                <button onClick={ () => {Counter[1](++Counter[0])}}>+</button>
            </div>
        </div>
    )
}

export default Child;