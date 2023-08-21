import { Order } from "@medusajs/medusa"
import Button from "@modules/common/components/button"
import Thumbnail from "@modules/products/components/thumbnail"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { useMemo } from "react"

type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  return (
    <div className="bg-white shadow-md p-4 flex flex-col">
      <div className="mx-auto md:w-full grid md:grid-cols-2 gap-y-2">
        <div className="flex items-center divide-x divide-gray-200 text-small-regular text-gray-700">
          <span className="pr-2">
            {new Date(order.created_at).toLocaleDateString('pt-pt', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
          <span className="px-2">
            {formatAmount({
              amount: order.total,
              region: order.region,
              includeTaxes: true,
            })}
          </span>
          <span className="pl-2">{`${numberOfLines} ${numberOfLines > 1 ? "items" : "item"
            }`}</span>
        </div>
        <span className="text-gray-700 text-sm md:text-right">{order.id.split("order_")[1]}</span>
      </div>
      <div className="grid grid-cols-2 small:grid-cols-4 gap-4 my-4">
        {order.items.slice(0, 3).map((i) => {
          return (
            <div key={i.id} className="flex flex-col gap-y-2">
              <Thumbnail
                thumbnail={order.items[0].thumbnail}
                images={[]}
                size="full"
              />
              <div className="flex items-center text-small-regular text-gray-700">
                <span className="text-gray-900 font-semibold">{i.title}</span>
                <span className="ml-2">x</span>
                <span>{i.quantity}</span>
              </div>
            </div>
          )
        })}
        {numberOfProducts > 4 && (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <span className="text-small-regular text-gray-700">
              + {numberOfLines - 4}
            </span>
            <span className="text-small-regular text-gray-700">mais</span>
          </div>
        )}
      </div>
      <div className="flex justify-end">
        <Link href={`/order/details/${order.id}`}>
          <Button variant="secondary">Ver detalhes</Button>
        </Link>
      </div>
    </div>
  )
}

export default OrderCard
