import style from './CartElement.module.css'

export default function CartElement({image, productName, price}) {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={image} alt={productName}/>
      </div>
      <div className={style.productName}>{productName}</div>
      <div className={style.price}>{`${price}$`}</div>
      <div className={style.counter}>
        +
        0
        -
        </div>
    </div>
  )
}
