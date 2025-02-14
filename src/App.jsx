import { BrowserRouter, Route, Routes, NavLink } from 'react-router'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Shop} from './pages/Shop'


function App() {
  return (
      <BrowserRouter>
        <div>
          <NavLink to="/"> Home</NavLink>
          <NavLink to="/about"> About</NavLink>
          <NavLink to="/shop"> Shop</NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
