import style from './HeroBanner.module.css'
import heroImage from '../../../../assets/images/img-hero.png'
import {Button} from '../../../../components/Button'
// import {Icon} from "../../../../components/Icon"
// import cart from "../../../../assets/images/carticon-white.svg"

export default function HeroBanner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.bannerText}>
          <h1> Enjoy your <span>coffee</span> before your activity</h1>
          <p>
          Boost your productivity and build your mood with a glass of coffee in the morning 
          </p>
          <div className={style.ctaContainer}>
        <Button 
          label="Order Now" 
          variant="background" 
          // icon={<Icon icon={cart} width={22} />} 
          clickHandler={()=>console.log("clicked")}/>
        <Button label="More Menue" clickHandler={()=>console.log("clicked")}/>
      </div>
      </div>
      <div className={style.bannerImage}>
        <img src={heroImage} width={526} />
      </div>
      
    </div>
  )
}
