import { CheckoutFormValues } from "@lib/context/checkout-context"
import { emailRegex } from "@lib/util/regex"
import ConnectForm from "@modules/common/components/connect-form"
import Input from "@modules/common/components/input"
import { useMeCustomer } from "medusa-react"
import AddressSelect from "../address-select"
import CountrySelect from "../country-select"

const ShippingAddress = () => {
  const { customer } = useMeCustomer()
  return (
    <div>
      {customer && (customer.shipping_addresses?.length || 0) > 0 && (
        <div className="mb-6 flex flex-col gap-y-4 bg-amber-100 p-4">
          <p className="text-small-regular">
            {`Hi ${customer.first_name}, do you want to use one of your saved addresses?`}
          </p>
          <AddressSelect addresses={customer.shipping_addresses} />
        </div>
      )}
      <ConnectForm<CheckoutFormValues>>
        {({ register, formState: { errors, touchedFields } }) => (
          <div className="grid grid-cols-1 gap-y-2">
            <Input
              label="Email"
              {...register("email", {
                required: "Email é necessário",
                pattern: emailRegex,
              })}
              autoComplete="email"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-2 gap-x-2">
              <Input
                label="Primeiro Nome"
                {...register("shipping_address.first_name", {
                  required: "Primeiro Nome é necessário",
                })}
                autoComplete="given-name"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Último Nome"
                {...register("shipping_address.last_name", {
                  required: "Último Nome é necessário",
                })}
                autoComplete="family-name"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <Input
              label="Empresa"
              {...register("shipping_address.company")}
              autoComplete="organization"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Morada"
              {...register("shipping_address.address_1", {
                required: "Morada é necessária",
              })}
              autoComplete="address-line1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Apartamento, bloco, porta."
              {...register("shipping_address.address_2")}
              autoComplete="address-line2"
              errors={errors}
              touched={touchedFields}
            />
            <div className="grid grid-cols-[122px_1fr] gap-x-2">
              <Input
                label="Código postal"
                {...register("shipping_address.postal_code", {
                  required: "Código postal é necessário",
                })}
                autoComplete="postal-code"
                errors={errors}
                touched={touchedFields}
              />
              <Input
                label="Cidade"
                {...register("shipping_address.city", {
                  required: "Cidade é necessária",
                })}
                autoComplete="address-level2"
                errors={errors}
                touched={touchedFields}
              />
            </div>
            <CountrySelect
              {...register("shipping_address.country_code", {
                required: "País é necessário",
              })}
              autoComplete="country"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Freguesia / Concelho"
              {...register("shipping_address.province")}
              autoComplete="address-level1"
              errors={errors}
              touched={touchedFields}
            />
            <Input
              label="Telemóvel"
              {...register("shipping_address.phone")}
              autoComplete="tel"
              errors={errors}
              touched={touchedFields}
            />
          </div>
        )}
      </ConnectForm>
    </div>
  )
}

export default ShippingAddress
