import medusaRequest from "@lib/medusa-fetch"
import OrderCompletedTemplate from "@modules/order/templates/order-completed-template"
import { Metadata } from "next"

type Props = {
  params: { id: string }
}

async function getOrder(id: string) {
  const res = await medusaRequest("GET", `/orders/${id}`)

  if (!res.ok) {
    throw new Error(`Failed to fetch order: ${id}`)
  }

  return res.body
}

export const metadata: Metadata = {
  title: "Encomenda Confirmada",
  description: "A tua compra foi bem sucedida",
}

export default async function CollectionPage({ params }: Props) {
  const { order } = await getOrder(params.id)

  return <OrderCompletedTemplate order={order} />
}
