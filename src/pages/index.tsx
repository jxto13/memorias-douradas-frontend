import Head from "@modules/common/components/head"
import Carousel from "@modules/home/components/carousel"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { ThreeItemGrid } from '@modules/home/components/carousel/grid/three-items';
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout, ProductPreviewType } from "types/global"

// Create example product data for firstProduct
const firstProduct: ProductPreviewType = {
  id: '1',
  title: 'Example Product 1',
  handle: 'example-product-1',
  thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png',
  price: {
    calculated_price: '$19.99',
    original_price: '$29.99',
    difference: '$10.00',
    price_type: 'default',
  },
};

// Create example product data for secondProduct
const secondProduct: ProductPreviewType = {
  id: '2',
  title: 'Example Product 2',
  handle: 'example-product-2',
  thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatpants-gray-front.png',
  price: {
    calculated_price: '$14.99',
    original_price: '$24.99',
    difference: '$10.00',
    price_type: 'sale',
  },
};

// Create example product data for thirdProduct
const thirdProduct: ProductPreviewType = {
  id: '3',
  title: 'Example Product 3',
  handle: 'example-product-3',
  thumbnail: 'https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-front.png',
  price: {
    calculated_price: '$9.99',
    original_price: '$19.99',
    difference: '$10.00',
    price_type: 'default',
  },
};


const Home: NextPageWithLayout = () => {
  
  return (
    <>
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
      <ThreeItemGrid
        firstProduct={firstProduct}
        secondProduct={secondProduct}
        thirdProduct={thirdProduct}
      />
      {/* <Hero /> */}
      {/* <FeaturedProducts /> */}
      <Carousel/>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
