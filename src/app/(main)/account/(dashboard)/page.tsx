import OverviewTemplate from "@modules/account/templates/overview-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conta",
  description: "Vista geral das atividades da tua conta.",
}

export default function Account() {
  return <OverviewTemplate />
}
