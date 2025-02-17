import style from './NavBar.module.css'
import { NavLink } from 'react-router'
import logoCoffee from '../../assets/images/logo_coffe.svg'
import cart from '../../assets/images/cartIcon.svg'
import {Icon} from '../Icon'
import {ItemsCount} from './components/ItemsCount'

export default function NavBar() {
  return (
    <nav className={style.navBar}>
      <div className={style.logo}>
        <img src={logoCoffee} alt="Coffee Street"/>
      </div>
      <div className={style.nav}>
          <NavLink className={style.navLink} to="/">Home</NavLink>
          <NavLink className={style.navLink} to="/shop">Shop</NavLink>
          <NavLink className={style.navLink} to="/checkout">
            <Icon width="25px" icon={cart} bg="transparent"/>
            <ItemsCount />
          </NavLink>
          
      </div>
      
    </nav>
  )
}
