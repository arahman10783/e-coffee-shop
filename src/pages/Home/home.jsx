import { HeroBanner } from "./components/HeroBanner";
import {MainProducts} from "./components/MainProducts"
import style from './Home.module.css'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MainProducts />
      <div className={style.footer}></div>
    </>
  )
}