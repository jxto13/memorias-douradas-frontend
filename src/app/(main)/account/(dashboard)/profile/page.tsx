import ProfileTemplate from "@modules/account/templates/profile-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Perfil",
  description: "Ver e editar o seu perfil.",
}

export default function Profile() {
  return <ProfileTemplate />
}
