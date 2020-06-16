import React, {useReducer} from 'react';
import CounterReducer from './counterReducer';

const Child = () => {

    let [state, dispatch] = useReducer(CounterReducer,0);

    return (
        <div>
            <h2> This is Reducer Counter </h2>
            <h2>Counter Value: {state}</h2>
            <div className="childButtons">
                <button onClick = {() => dispatch('DECREMENT')}>-</button>
                <button onClick={ ()=> dispatch('RESET')}>Reset</button>
                <button onClick = { () => dispatch('INCREMENT') }>+</button>
            </div>
        </div>
    )
}

export default Child;