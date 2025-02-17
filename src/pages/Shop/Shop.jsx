import { Card } from '../../components/Card'
import { Heading } from '../../components/Heading'
import style from './Shop.module.css'
import {products} from './coffee-db.json'

export default function Shop() {
  return (
    <div className={style.container}>
      <Heading title="Special menu" underlinedTxt="for you" />
      <div className={style.products}>
      {
        products.map(({id,title,description, image, rate, price}) => (
            <Card 
              key={id}
              image={image}
              title={title}
              price = {price}
              rate ={rate} 
              describe={description}
            />
          ))
          }
      </div>
    </div>
  )
}
