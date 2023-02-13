import React, { useState } from "react";

function HookCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Counter with hook</p>
            <button onClick={() => setCount(count + 1)}>Count: {count}</button>
        </div>
    );
}

export default HookCounter;
