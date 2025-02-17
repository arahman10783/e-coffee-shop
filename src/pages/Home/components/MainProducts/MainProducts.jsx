import style from './MainProducts.module.css'
import {Heading} from '../../../../components/Heading';
import {Card} from '../../../../components/Card'
import { useEffect } from 'react';
import { getProducts } from '../../../../services/services';
import { useState } from 'react';

export default function MainProducts() {
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")

  async function fetchData() {
    const products = await getProducts(3)
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
      <Heading title="Popular" underlinedTxt="Now" />
      <div className={style.products}>
        {
          error && <p>{error}</p>
        }
        {
          products.map((product) => (
            <Card 
            key={product.id}
            product={product}
            />
          ))
        }
      </div>
    </div>
  )
}
