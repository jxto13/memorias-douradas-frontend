import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data";
import Link from 'next/link';
import { GridTileImage } from './grid/tile';

const Carousel = () => {
  // Collections that start with `hidden-*` are hidden from the search page.
  const { data } = useFeaturedProductsQuery();

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1">
      <div className="flex gap-4 animation-carousel" >
        {data && data.length > 0 ? (
          data.map((product: any, i: number) => (
            <Link
              key={`${product.handle}${i}`}
              href={`/products/${product.handle}`}
              className="h-[30vh] w-2/3 flex-none md:w-1/3"
            >
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.price?.original_price,
                  currencyCode: 'EUR'
                }}
                src={product.thumbnail}
                width={600}
                height={600}
              />
            </Link>
          ))
        ) : (
          Array.from(Array(8).keys()).map((i) => (
            <li key={i}></li>
          ))
        )}
      </div>
    </div>
  );
}

export default Carousel;
