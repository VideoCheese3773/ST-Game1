import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const [label, setLabel] = useState('Player');

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <input
                type="text"
                value={label}
                onChange={handleLabelChange}
                placeholder="Enter label"
                style={{ marginBottom: '20px', fontSize: '16px', padding: '5px' }}
            />
            <h1>{label}: {count}</h1>
            <button onClick={increment} style={{ marginRight: '10px' }}>+1</button>
            <button onClick={decrement}>-1</button>
        </div>
    );
};

export default Counter;