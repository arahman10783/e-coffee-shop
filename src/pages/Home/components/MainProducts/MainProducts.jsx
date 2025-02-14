import style from './MainProducts.module.css'
import {Heading} from '../../../../components/Heading';
import {Card} from '../../../../components/Card'
import {products} from './coffee-db.json'

export default function MainProducts() {
  return (
    <div className={style.container}>
      <Heading title="Popular" underlinedTxt="Now" />
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
