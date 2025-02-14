import style from './Icon.module.css'
export default function Icon({icon, width}) {
  return (
    <div className={style.background} style={{width: width, height: width}}>
      <img src={icon} />
    </div>
  )
}
