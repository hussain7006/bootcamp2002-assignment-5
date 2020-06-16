import React from 'react';
import Child from './Child';
import './Parent.css';
import ChildReducer from './ChildReducer';

const Parent = () => {
    return (
        <div>
            {/* <h2>This is Parent</h2> */}
            <div className="CounterContext">
                <Child />
            </div>
            <div className="CounterReducer">
                <ChildReducer />
            </div>
        </div>

    )
}

export default Parent;