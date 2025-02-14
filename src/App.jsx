import { BrowserRouter, Route, Routes, NavLink } from 'react-router'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Shop} from './pages/Shop'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
