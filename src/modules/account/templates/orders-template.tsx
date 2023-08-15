import OrderOverview from "../components/order-overview"

const OrdersTemplate = () => {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col gap-y-4">
        <h1 className="text-2xl-semi">Encomendas</h1>
        <p className="text-base-regular">
          Vê as tuas encomandas anteriores e o seu estado.
          {/* View your previous orders and their status. You can also create
          returns or exchanges for your orders if needed. */}
        </p>
      </div>
      <div>
        <OrderOverview />
      </div>
    </div>
  )
}

export default OrdersTemplate
