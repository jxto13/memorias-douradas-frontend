import OrdersTemplate from "@modules/account/templates/orders-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Encomendas",
  description: "Vista geral das encomendas anteriores...",
}

export default function Orders() {
  return <OrdersTemplate />
}
