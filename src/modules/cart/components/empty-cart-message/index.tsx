import UnderlineLink from "@modules/common/components/underline-link"

const EmptyCartMessage = () => {
  return (
    <div className="bg-amber-100 px-8 py-24 flex flex-col justify-center items-center text-center">
      <h1 className="text-2xl-semi">O teu carrinho está vazio</h1>
      <p className="text-base-regular mt-4 mb-6 max-w-[32rem]">
        Não tens nada no teu carrinho. Vamos mudar isso! Usa o link abaixo para começares a explorar os nossos produtos.
      </p>
      <div>
        <UnderlineLink href="/store">Explorar produtos</UnderlineLink>
      </div>
    </div>
  )
}

export default EmptyCartMessage
