import Button from "@modules/common/components/button"
import Link from "next/link"

const SignInPrompt = () => {
  return (
    <div className="bg-white flex items-start justify-between">
      <div>
        <h2 className="text-xl-semi">Já tem uma conta?</h2>
        <p className="text-base-regular text-gray-700 mt-2">
          Faça uma para uma melhor experiência.
        </p>
      </div>
      <div>
        <Link href="/account/login">
          <Button variant="secondary">Entrar</Button>
        </Link>
      </div>
    </div>
  )
}

export default SignInPrompt
