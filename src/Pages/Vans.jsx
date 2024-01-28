import React, { useEffect, useState } from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import bgImg from '../assets/about-hero.png'
import Nav from '../components/VansComponent/Nav'
import "../server"


const Vans = () => {
    const [vans, setVans] = useState([])
    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))

    },[])

    const vanElements = vans.map((van)=> (
        <div key={van.id} className='van-tile'>
            <img src={van.imageUrl} alt="" />
            <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`} >van.type</i>
        </div>
    ))

    console.log(vans)
  return (
    <div>
        <Nav/>
        <div className="van-list-container">
            <h1>Explore our van option</h1>
            <div className="van-list">
            {vanElements}

            </div>
        </div>
    </div>
  )
}

export default Vans