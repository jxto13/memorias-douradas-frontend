import { Order } from "@medusajs/medusa"

type OrderDetailsProps = {
  order: Order
  showStatus?: boolean
}

const OrderDetails = ({ order, showStatus }: OrderDetailsProps) => {
  const items = order.items.reduce((acc, i) => acc + i.quantity, 0)

  const formatStatus = (str: string) => {
    const formatted = str.split("_").join(" ")

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div className="p-10 border-b border.gray-200">
      <div className="mx-auto md:w-full grid md:grid-cols-2 gap-y-2">
        <span className="text-gray-700 text-sm uppercase md:col-span-1">
          Obrigado, a sua encomenda foi colocada com sucesso
        </span>
        <span className="text-gray-700 text-sm md:text-right">{order.id.split("order_")[1]}</span>
      </div>

      <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
        <span>{new Date(order.created_at).toLocaleDateString('pt-pt', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span>{`${items} ${items !== 1 ? "items" : "item"}`}</span>

      </div>
      {showStatus && (
        <>
          <div className="pt-4">
            <span className="text-gray-700 text-lg mb-4">Estado</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="bg-white shadow-md p-4 text-center">{(() => {
                switch (formatStatus(order.payment_status)) {
                  case "Awaiting":
                    return <span>Esperando Pagamento</span>;
                  case "Captured":
                    return <span>Pagamento confirmado</span>;
                  case "Refunded":
                    return <span>Reembolsado</span>;
                  default:
                    return <span></span>;
                }
              })()}</div>
              <div className="bg-white shadow-md p-4 text-center">{/* Translation of the order based on status */}
                {(() => {
                  switch (formatStatus(order.fulfillment_status)) {
                    case "Not fulfilled":
                      return <span>Não processado</span>;
                    case "Fulfilled":
                      return <span>Processado</span>;
                    case "Shipped":
                      return <span>Enviado</span>;
                    default:
                      return <span></span>;
                  }
                })()}</div>
            </div>




          </div>
        </>
      )}
    </div>

  )
}

export default OrderDetails
