import React, {useState, useEffect} from 'react'
import Axios from 'axios'


const FetchData = () => {
    const [cartFact, setCartFact] = useState("");

    const fetchCartFact = ()=>{
        Axios.get("https://catfact.ninja/fact").then(res => {
    setCartFact(res.data.fact)
        })

    }

    useEffect(()=>{
        fetchCartFact();
    },[])


  
  return (
    <div>
        <p>{cartFact}</p>
        <button onClick={fetchCartFact}>Generate Cart Fact</button>
    </div>
  )
}

export default FetchData