import React from 'react'
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import Link from 'next/link';
import { GridTileImage } from './grid/tile';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import SkeletonProductPreview from '@modules/skeletons/components/skeleton-product-preview';

type PropType = {
  options?: EmblaOptionsType
}

const Carousel : React.FC<PropType> = (props) => {
  const {options } = props
  const [emblaRef] = useEmblaCarousel(options, [Autoplay()])
  // Collections that start with `hidden-*` are hidden from the search page.
  const { data } = useFeaturedProductsQuery();

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">    

        {data && data.length > 0 ? (
          data.map((product: any, i: number) => (
            <Link
              key={`${product.handle}${i}`}
              href={`/products/${product.handle}`}
              className="h-[30vh] w-2/3 flex-none md:w-1/3 embla__slide"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.price?.original_price,
                }}
                src={product.thumbnail}
                width={600}
                height={600}
              />
            </Link>
          ))
        ) : Array.from(Array(8).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
          )
        )}
      </div>
      </div>
    </div>
  );
}

export default Carousel;
