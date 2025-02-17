import style from './Icon.module.css'
export default function Icon({icon, width, bg}) {
  return (
    <div className={style.background} style={{width: width, height: width, backgroundColor: bg}}>
      <img src={icon} />
    </div>
  )
}
