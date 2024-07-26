import { EmailIcon, FillLockIcon } from "@/common/components/icons"
import { CustomInput } from "@/common/components/ui"
import { Link } from "react-router-dom"

export const LoginPage = () => {
  return (
    <div className="text-center  pt-8">
      <h2 className="pb-8">Iniciar sesión</h2>

      <div className="space-y-4 pb-6">
        <CustomInput icon={() => <EmailIcon />} placeholder="Mail" />
        <CustomInput icon={() => <FillLockIcon />} placeholder="Contraseña" />
      </div>

      <a href="#" className="text-sm text-primary">¿Olvidaste tu contraseña?</a>

      <button className='mt-6 mb-4 bg-tertiary py-3 text-base text-white font-medium rounded-full w-full hover:bg-tertiary/90'>Iniciar sesión</button>

      <div className="flex flex-col gap-4">
        <a href="#" className="text-sm text-primary">¿No tenés cuenta?</a>
        <Link to="/auth/register" className="underline text-tertiary font-bold">Registrarme</Link>
      </div>
    </div>
  )
}
