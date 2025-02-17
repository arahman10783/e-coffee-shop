import { Heading } from '../../components/Heading'
import style from './Checkout.module.css'
import CartElement from './components/CartElement/CartElement'


export default function Checkout() {
  return (
    <div className={style.container}>
      <Heading title="Items selected to" underlinedTxt = "checkout" />
      <CartElement 
          image="https://images.unsplash.com/photo-1502462041640-b3d7e50d0662?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="Vanilla Latte"
          price={20}
          />
    </div>
  )
}
