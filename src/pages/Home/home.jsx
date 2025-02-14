import { HeroBanner } from "./components/HeroBanner";
import {MainProducts} from "./components/MainProducts"

export default function Home() {
  return (
    <>
      <HeroBanner />
      <MainProducts />
      {/**
       * <MainProducts />
       * <Delivery />
       * 
       */}
    </>
  )
}