import style from './Card.module.css'
import {Icon} from '../Icon'
import cart from '../../assets/images/carticon-white.svg'

export default function Card(props) {
  const {image, title, price, rate, describe} = props
  return (
    <div className= {style.card}>
      <div className={style.imageContainer}>
        <span className={style.ratePadge}>{rate}</span>
        <img src={image} alt="title"/>
      </div>
      <div className={style.cardTxt}>
        <span>{title}</span>
        <span>{price}</span>
      </div>
      <div className={style.cardTxt}>
        <span className={style.describe}>{describe}</span>
        <Icon width="10px" icon={cart}/>
      </div>
    </div>
  )
}
