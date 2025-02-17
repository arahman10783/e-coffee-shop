import { BrowserRouter, Route, Routes } from 'react-router'
import {Home} from './pages/Home'
import {Shop} from './pages/Shop'
import { NavBar } from './components/navBar'
import style from './App.module.css'
import { Checkout } from './pages/checkout'
import {SelectedProductsProvider} from './context/selectedProducts'


function App() {
  
  return (
    <SelectedProductsProvider>
      <BrowserRouter>
        <div className={style.container}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </div>
      </BrowserRouter>
    </SelectedProductsProvider>

  )
}

export default App
