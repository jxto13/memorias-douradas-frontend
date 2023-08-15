import AddressesTemplate from "@modules/account/templates/addresses-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Endereços",
  description: "Ver os teus endereços",
}

export default function Addresses() {
  return <AddressesTemplate />
}
