import { Heading } from '../../components/Heading'
import style from './Checkout.module.css'


export default function Checkout() {
  return (
    <div className={style.container}>
      <Heading title="Items selected to" underlinedTxt = "checkout" />
      
    </div>
  )
}
