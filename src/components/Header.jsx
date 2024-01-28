import React, {useState, useEffect} from 'react'
import Axios from 'axios'


const Header = () => {
    const [user, setUser] = useState(0);
    const [name, setName] = useState("");

    const fetchData = ()=>{
        Axios.get(`https://api.agify.io/?name=${user}`)
        .then(res => {
            setName(res.data.name)
            setUser(res.data.age)
        })
    }

  return (
    <div>
        <input type="text" placeholder='Ex. Pedro...' onChange={(e)=> setUser(e.target.value)} />
        <button onClick={(fetchData)}>Predict Age</button>

        <h1>Predicted Age for: {name} is {user}  </h1>
    </div>
  )
}

export default Header