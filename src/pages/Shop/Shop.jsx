import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import { Heading } from '../../components/Heading'
import style from './Shop.module.css'
import {getProducts} from '../../services/services'

export default function Shop() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  async function fetchData() {
    const products = await getProducts()
    if (Array.isArray(products)){
      setProducts(products)
    }else{
      setError("Something went wrong")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className={style.container}>
      <Heading title="Special menu" underlinedTxt="for you" />
      <div className={style.products}>
        {
          error && <p>{error}</p>
        }
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
