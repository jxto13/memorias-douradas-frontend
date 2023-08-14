import { CheckoutFormValues } from "@lib/context/checkout-context"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import CountrySelect from "../country-select"

const BillingAddress = () => {
  return (
    <ConnectForm<CheckoutFormValues>>
      {({ register, formState: { errors, touchedFields } }) => (
        <div className="grid grid-cols-1 gap-y-2">
          <div className="grid grid-cols-2 gap-x-2">
            <Input
              label="Primeiro Nome"
              {...register("billing_address.first_name", {
                required: "Primeiro Nome é necessário",
              })}
              autoComplete="given-name"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Último Nome"
              {...register("billing_address.last_name", {
                required: "Último Nome é necessário",
              })}
              autoComplete="family-name"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <Input
            label="Empresa"
            {...register("billing_address.company")}
            autoComplete="organization"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Morada"
            {...register("billing_address.address_1", {
              required: "Morada é necessária",
            })}
            autoComplete="address-line1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Apartamento, bloco, porta."
            {...register("billing_address.address_2")}
            autoComplete="address-line2"
            errors={errors}
            touched={touchedFields}
          />
          <div className="grid grid-cols-[144px_1fr] gap-x-2">
            <Input
              label="Código postal"
              {...register("billing_address.postal_code", {
                required: "Código postal é necessário",
              })}
              autoComplete="postal-code"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Cidade"
              {...register("billing_address.city", {
                required: "Cidade é necessária",
              })}
              autoComplete="address-level2"
              errors={errors}
              touched={touchedFields}
            />
          </div>
          <CountrySelect
            {...register("billing_address.country_code", {
              required: "País é necessário",
            })}
            autoComplete="country"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Freguesia / Concelho"
            {...register("billing_address.province")}
            autoComplete="address-level1"
            errors={errors}
            touched={touchedFields}
          />
          <Input
            label="Telemóvel"
            {...register("billing_address.phone")}
            autoComplete="tel"
            errors={errors}
            touched={touchedFields}
          />
        </div>
      )}
    </ConnectForm>
  )
}

export default BillingAddress
