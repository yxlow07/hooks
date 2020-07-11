import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'

function HookCounterThree() {

    const [name, setName] = useState({firstName: "", lastName: ""})
    return(
        <form>
            <input type="text"
                   className="form-control-sm m-2"
                   value={name.firstName}
                   onChange={e => setName({ ...name,firstName: e.target.value})}
                   placeholder="First name"
            />
            <input type="text"
                   className="form-control-sm m-2"
                   value={name.lastName}
                   onChange={e => setName({ ...name, lastName: e.target.value})}
                   placeholder="Last name"
            />
            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>
        </form>
    )
}

export default HookCounterThree