import React, { useState } from 'react';

const EightBall = ({ answers }) => {
    const initialState = {
        color: 'black',
        message: 'Think of a Question',
    };

    const [ballState, setBallState] = useState(initialState);

    const handleClick = () => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        const { msg, color } = answers[randomIndex];
        setBallState({ color, message: msg });
    };

    const handleReset = () => {
        setBallState(initialState);
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    backgroundColor: ballState.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                }}
                onClick={handleClick}
            >
                <p>{ballState.message}</p>
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default EightBall;
