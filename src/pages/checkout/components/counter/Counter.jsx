import { useContext } from 'react'
import style from './Coumter.module.css'
import { SelectedProductContext } from '../../../../context/selectedProducts'

export default function Counter({id, count}) {
  const {updateCount, deleteProduct} = useContext(SelectedProductContext)

  function increaseHandler(id) {
    updateCount(id, count+1)
  }
  function decreaseHandler(id){
    if(count > 1){
      updateCount(id, count - 1)
    }else{
      deleteProduct(id)
    }
  }
  return (
    <div className={style.counter}>
      <button className={style.counterButton} onClick={() => increaseHandler(id)}>+</button>
      <span>{count}</span>
      <button className={style.counterButton} onClick={() => decreaseHandler(id)}>-</button>
      </div>
  )
}
