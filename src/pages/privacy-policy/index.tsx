import Head from "@modules/common/components/head"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"

const Policy: NextPageWithLayout = () => {
  return (
    <>
      <Head title="Termos legais" description="Termos de serviço e politica" />

    </>
  )
}

Policy.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Policy
