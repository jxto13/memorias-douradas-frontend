import { medusaClient } from "@lib/config"
import { LOGIN_VIEW, useAccount } from "@lib/context/account-context"
import Button from "@modules/common/components/button"
import Input from "@modules/common/components/input"
import Spinner from "@modules/common/icons/spinner"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

interface RegisterCredentials extends FieldValues {
  first_name: string
  last_name: string
  email: string
  password: string
  phone?: string
}

const Register = () => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)
  const router = useRouter()

  const handleError = (e: Error) => {
    setAuthError("An error occured. Please try again.")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterCredentials>()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.customers
      .create(credentials)
      .then(() => {
        refetchCustomer()
        router.push("/account")
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm flex flex-col items-center mt-12">
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner size={24} />
        </div>
      )}
      <h1 className="text-large-semi uppercase mb-6">Torne-se um membro</h1>
      <p className="text-center text-base-regular text-gray-700 mb-4">
        Crie o seu perfil para ter acesso a uma melhor experiência.
      </p>
      <form className="w-full flex flex-col" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Primeiro Nome"
            {...register("first_name", { required: "First name é necessário" })}
            autoComplete="given-name"
            errors={errors}
          />
          <Input
            label="Último Nome"
            {...register("last_name", { required: "Último Nome é necessário" })}
            autoComplete="family-name"
            errors={errors}
          />
          <Input
            label="Email"
            {...register("email", { required: "Email é necessário" })}
            autoComplete="email"
            errors={errors}
          />
          <Input
            label="Telemóvel"
            {...register("phone")}
            autoComplete="tel"
            errors={errors}
          />
          <Input
            label="Password"
            {...register("password", {
              required: "Password é necessário",
            })}
            type="password"
            autoComplete="new-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-rose-500 w-full text-small-regular">
            As suas credências não estão nos nossos registos
            </span>
          </div>
        )}
        <span className="text-center text-gray-700 text-small-regular mt-6">
          Ao criar uma conta você aceita os {" "}
          <Link href="/privacy-policy" className="underline">
            termos de uso e privacidade 
          </Link>{" "}
          de Memórias Douradas.
        </span>
        <Button className="mt-6">Join</Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Já é membro?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.SIGN_IN)}
          className="underline"
        >
          Entrar
        </button>
        .
      </span>
    </div>
  )
}

export default Register
