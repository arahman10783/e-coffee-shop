import style from './ItemsCount.module.css'


export default function ItemCounts({count}) {
  return (
    <div className={style.count}>{count}</div>
  )
}
