import Alert from "@modules/common/icons/alert"

const PaymentTest = () => {
  return (
    <div className="w-full">
      <div className="flex items-center gap-x-2 bg-yellow-100 w-full p-2">
        <Alert size={16} className="text-yellow-700" />
        <span className="text-small-regular text-yellow-700">
          <span className="font-semibold">Atenção:</span> A sua encomenda só será enviada após a verficação de recebimento de pagamento. Irá receber um email quando isso acontecer.
        </span>
      </div>
    </div>
  )
}

export default PaymentTest
