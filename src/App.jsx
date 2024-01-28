import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Vans from './Pages/Vans'
import VanDetailPage from './Pages/VanDetailPage'



function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/vans' element={<Vans/>} />
      <Route path='/vans/:id' element={<VanDetailPage/>} />
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
 