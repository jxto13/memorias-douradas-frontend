'use client'

import React from 'react'
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import Link from 'next/link';

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import UnderlineLink from '@modules/common/components/underline-link';
import { ProductCard } from './product-card';
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const Carousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ containScroll: 'trimSnaps' }, [Autoplay()])
  // Collections that start with `hidden-*` are hidden from the search page.
  const { data } = useFeaturedProductsQuery();

  return (
    <div className="py-12">
      <div className="content-container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-2xl-regular text-gray-600 mb-6">
            Últimas novidades!
          </span>
          <p className="text-1xl-regular text-gray-900 max-w-lg mb-4">
            Para que não tenhas que escolher o teu melhor momento preparamos alguns para si
          </p>
          <UnderlineLink href="/store">Explorar produtos</UnderlineLink>
        </div>

        <div className="embla" ref={emblaRef}>
          <div className="embla__container space-x-4">
            {data && data.length > 0 ? (
              data.map((product: any, i: number) => (
                <Link
                  key={`${product.handle}${i}`}
                  href={`/products/${product.handle}`}
                  className="max-w-sm rounded overflow-hidden shadow-lg embla__slide">
                  <ProductCard
                    alt={product.title}
                    label={{
                      title: product.title,
                      amount: product.price?.calculated_price,
                      position: "bottom"
                    }}
                    src={product.thumbnail}
                    width={600}
                    height={600}
                  />
                </Link>
              ))
            ) : Array.from(Array(4).keys()).map((i) => (

              <div key={i} className="flex-1 content-container">
                <ul className="grid grid-cols-1 small:grid-cols-[1fr_360px] gap-x-8 py-12">

                  <SkeletonProductPreview />
                </ul>
              </div>


            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
