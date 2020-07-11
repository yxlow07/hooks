import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function HookCounterOne() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => {
        document.title = `You clicked ${count} times`
        console.log('useEffect ~ Updating document title')
    }, [ count ] )

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)} className="btn btn-outline-success">Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
