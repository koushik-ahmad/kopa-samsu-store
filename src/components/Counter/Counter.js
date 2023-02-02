import './Counter.css';
import React, { useState } from 'react';

const Counter = (props) => {
    console.log(props);
    const { count, handleAdd, handleMinus } = props;

    return (
        <div className='name'>
            <h1>Count: {count}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleMinus}>Minus</button>
        </div>
    );
};

export default Counter;