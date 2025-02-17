import { Heading } from '../../components/Heading'
import style from './Checkout.module.css'
import CartElement from './components/CartElement/CartElement'
import {Button} from '../../components/Button'
import { useContext } from 'react'
import { SelectedProductContext } from '../../context/selectedProducts'


export default function Checkout() {
  const {totalPrice, selectedProducts}= useContext(SelectedProductContext)
  return (
    <div className={style.container}>
      <Heading title="Items selected to" underlinedTxt = "checkout" />
      {
        selectedProducts.length > 0 
        ? selectedProducts.map((product) => 
          <CartElement 
              key={product.id}
              product={product}
            />
        )
        : <p className={style.info}>No products Selected</p>
      }

        <div className={style.total}>
          {`Total: ${totalPrice}$`}
        </div>
        <div className={style.orderBtn}>
          <Button label="Order Now" variant="border"/>
        </div>
    </div>
  )
}
