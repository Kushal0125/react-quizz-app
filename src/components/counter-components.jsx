import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>count- {count}</p>
            <p>value-{count % 2 === 0 ? "Even" : "Odd"}</p>
            <button onClick={()=> setCount(count + 1)}>increment</button>
            <button onClick={()=> setCount(count - 1)}>decrement</button>
        </div>
    )
}

export default Counter;