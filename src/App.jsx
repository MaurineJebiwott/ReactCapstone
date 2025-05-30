
import './css/App.css'
import Favorite from './pages/Favorite'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/NavBar'

function App() {
 
const movieNumber = 1
  return (
    <>
    <div>
      <Navbar/>
    </div>
  <main className="main-content">
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/favorites" element={<Favorite/>}/>
    </Routes>
  </main>
   </>
  )
}



export default App
