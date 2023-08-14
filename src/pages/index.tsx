import Head from "@modules/common/components/head"
import Carousel from "@modules/home/components/carousel"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout, ProductPreviewType } from "types/global"
import Welcome from "@modules/home/components/welcome"
import Info from "@modules/home/components/info"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="Página Inicial"
        description="Loja com pequenas memórias do Porto Santo"
      />
      <Welcome/>
      <Carousel />
      <Info />

    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
