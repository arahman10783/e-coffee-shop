import { useContext } from 'react'
import { Button } from '../../../../components/Button'
import style from './CartElement.module.css'
import { SelectedProductContext } from '../../../../context/selectedProducts'
import Counter from '../counter/Counter'

export default function CartElement({product}) {
  const {id, title, image, price, count} = product
  const {deleteProduct} = useContext(SelectedProductContext)

  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={image} alt={title}/>
      </div>
      <div className={style.productName}>{title}</div>
      <div className={style.price}>{`${price * count}$`}</div>
      <Counter id={id} count={count}/>
      <div className={style.delete}>
        <Button label="delete" variant="border" clickHandler= {() => deleteProduct(id)}  />
      </div>
    </div>
  )
}
