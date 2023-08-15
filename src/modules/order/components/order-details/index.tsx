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
      <span className="text-gray-700 text-small-regular uppercase">
        Obrigado, a sua encomenda foi colocada com sucesso
      </span>
      <h1 className="mt-2 uppercase text-2xl-semi">#{order.display_id}</h1>
      <span>{order.id.split("order_")[1]}</span>
      <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
        <span>{new Date(order.created_at).toLocaleDateString('pt-pt',{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        <span>{`${items} ${items !== 1 ? "items" : "item"}`}</span>
        {showStatus && (
          <>
            <span>{formatStatus(order.fulfillment_status)}</span>
            <span>{formatStatus(order.payment_status)}</span>
          </>
        )}
        {/*     {formatStatus(order.fulfillment_status)} {" "}
      {formatStatus(order.payment_status)}
      <div className="flex items-center text-gray-700 text-small-regular gap-x-4 mt-4">
        ------------------------
      </div>

      {(() => {
          switch (formatStatus(order.fulfillment_status)) {
            case "Not fulfilled":
              return <span>Não processado</span>;
            case "Fulfilled":
              return <span>Processado</span>;
            default:
              return null;
          }
        })()}
        {(() => {
          switch (formatStatus(order.payment_status)) {
            case "Awaiting":
              return <span>Esperando Pagamento</span>;
            case "Captured":
              return <span>Pagamento confirmado</span>;
            default:
              return null;
          }
        })()}
          </> */}
      </div>
    </div>
  )
}

export default OrderDetails
