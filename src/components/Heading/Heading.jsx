import style from './Heading.module.css'

export default function Heading({title, underlinedTxt}) {
  return (
    <h2 className={style.heading}>
      {`${title} `} <span>{underlinedTxt}</span>
    </h2>
  )
}
