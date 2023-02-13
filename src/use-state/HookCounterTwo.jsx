import React, { useState } from "react";

function HookCounterTwo() {
    let initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button>
            <button onClick={() => setCount((prevCount) => prevCount - 1)}>
                Decrement
            </button>
            <button onClick={incrementByFive}>Increment by 5</button>
        </div>
    );
}

export default HookCounterTwo;
