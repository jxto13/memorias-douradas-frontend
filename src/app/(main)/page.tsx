import Carousel from "@modules/home/components/carousel"
import Info from "@modules/home/components/info"
import Welcome from "@modules/home/components/welcome"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página Inicial",
  description:
    "Loja com pequenas memórias do Porto Santo",
}

const Home = () => {
  return (
    <>
      <Welcome/>
      <Carousel />
      <Info />
    </>
  )
}

export default Home
