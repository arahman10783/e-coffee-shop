import style from './Card.module.css'
import {Icon} from '../Icon'
import cart from '../../assets/images/carticon-white.svg'
import star from '../../assets/images/akar-icons_star.svg'
import { useContext } from 'react'
import { SelectedProductContext } from '../../context/selectedProducts'

export default function Card({product}) {
  const {id, image, title, price, rate, describe} = product
  const {addProduct} = useContext(SelectedProductContext)
  
  function cartClickHandler() {
    const product = {
      id,
      title,
      price,
      image,
    }
    addProduct(product)
  }

  return (
    <div className= {style.card}>
      <div className={style.imageContainer}>
        <span className={style.ratePadge}>{rate}
          <img src={star}/>
        </span>
        <img src={image} alt="title"/>
      </div>
      <div className={style.cardTxt}>
        <span>{title}</span>
        <span>{`${price}$`}</span>
      </div>
      <div className={style.cardTxt}>
        <span className={style.describe}>{describe}</span>
        <button onClick={cartClickHandler}>
        <Icon width="10px" icon={cart} />
        </button>
      </div>
    </div>
  )
}
