import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)} className="btn btn-outline-danger m-2">Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} className="btn btn-outline-success m-2">Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} className="btn btn-outline-warning m-2">Decrement</button>
            <button onClick={incrementFive} className="btn btn-outline-success m-2">Increment Five</button>
        </div>
    )
}

export default HookCounterTwo
