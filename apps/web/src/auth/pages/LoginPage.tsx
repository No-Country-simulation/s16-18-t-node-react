import { Link } from "react-router-dom"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { EmailIcon, FillLockIcon } from "@icons"
import { CustomInputFormik } from "@ui"

const INITIAL_VALUES = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email('El email es invalido').required('El email es obligatorio'),
  password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('La contraseña es obligatoria')
})

export const LoginPage = () => {
  const { handleSubmit, getFieldProps, errors }
    = useFormik({
      initialValues: INITIAL_VALUES,
      onSubmit: value => console.log(value),
      validationSchema: validationSchema,
    })

  return (
    <div className="text-center pt-8">
      <h2 className="pb-8">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="space-y-4 pb-6">
        <CustomInputFormik errorMessage={errors?.email} getFieldFormikProps={getFieldProps} name="email" icon={() => <EmailIcon />} placeholder="Email" />

        <CustomInputFormik errorMessage={errors?.password} getFieldFormikProps={getFieldProps} name="password" icon={() => <FillLockIcon />} placeholder="Contraseña" />

        <div className="space-y-4">
          <a href="#" className="hover:underline text-sm text-primary">¿Olvidaste tu contraseña?</a>

          <button type="submit" className='bg-tertiary py-3 text-base text-white font-medium rounded-full w-full hover:bg-tertiary/80'>Iniciar sesión</button>
        </div>
      </form>


      <div className="flex flex-col gap-4">
        <p className=" text-sm text-primary">¿No tenés cuenta?</p>
        <Link to="/auth/register" className="underline text-tertiary font-bold hover:text-tertiary/80">Registrarme</Link>
      </div>
    </div>
  )
}
