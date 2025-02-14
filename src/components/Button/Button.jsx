import style from './Button.module.css'

export default function Button(props) {
  const {label, variant, icon, clickHandler} = props


  return (
    <button className={`${style.button} ${
      variant === "background"
      ? style.buttonBg
      : variant === "border"
      ? style.buttonBorder
      : style.textOnly
    
    }`}
    onClick={clickHandler}
    >{label}{icon}
    </button>
  )
}
