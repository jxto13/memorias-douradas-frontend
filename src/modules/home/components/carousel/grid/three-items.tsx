import { GridTileImage } from '@modules/home/components/carousel/grid/tile';
import Link from 'next/link';
import { ProductPreviewType } from "types/global"

function ThreeItemGridItem({ item, size }: { item: ProductPreviewType; size: 'full' | 'half' }) {
  return (
    <div
      className={size === 'full' ? 'lg:col-span-4 lg:row-span-2' : 'lg:col-span-2 lg:row-span-1'}
    >
      <Link className="block h-full" href={`/product/${item.handle}`}>
        <GridTileImage
          src={item.thumbnail ?? ''}
          width={size === 'full' ? 1080 : 540}
          height={size === 'full' ? 1080 : 540}
          priority={true}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.price?.original_price ?? '',
            currencyCode: 'EUR'
          }}
        />
      </Link>
    </div>
  );
}

export function ThreeItemGrid({ firstProduct, secondProduct, thirdProduct }: {firstProduct: ProductPreviewType, secondProduct: ProductPreviewType, thirdProduct: ProductPreviewType}) {
  if (!firstProduct || !secondProduct || !thirdProduct) return null;

  return (
    <section className="py-12 mx-auto content-container grid max-w-screen-2xl gap-4 lg:grid-cols-6 lg:grid-rows-2">
      <ThreeItemGridItem size="full" item={firstProduct} />
      <ThreeItemGridItem size="half" item={secondProduct} />
      <ThreeItemGridItem size="half" item={thirdProduct} />
    </section>
  );
}