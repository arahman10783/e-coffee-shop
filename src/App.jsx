import { BrowserRouter, Route, Routes, NavLink } from 'react-router'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Shop} from './pages/Shop'
import { NavBar } from './components/navBar'
import style from './App.module.css'


function App() {
  return (
      <BrowserRouter>
        <div className={style.container}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
      </BrowserRouter>

  )
}

export default App
