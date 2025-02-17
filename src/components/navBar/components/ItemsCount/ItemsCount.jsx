import { useContext } from 'react'
import style from './ItemsCount.module.css'
import { SelectedProductContext } from '../../../../context/selectedProducts'


export default function ItemCounts() {
  const {total} = useContext(SelectedProductContext)

  return (
    total > 0 
    ? <div className={style.count}>{total}</div>
    : null
  )
}
