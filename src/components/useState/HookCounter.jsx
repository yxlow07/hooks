import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';

function HookCounter() {

    const [count, setCount]= useState(0)

    return(
        <div>
            <button onClick={() => setCount(count + 1)} className="btn btn-outline-warning m-2">Count {count}</button>
        </div>
    )
}

export default HookCounter