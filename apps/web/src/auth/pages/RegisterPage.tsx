import { Link } from "react-router-dom"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { EmailIcon, FillLockIcon } from "@icons"
import { CustomInputFormik } from "@ui"

const INITIAL_VALUES = {
  name: '',
  lastname: '',
  birthday: '',
  dni: '',
  gender: '',
  country: '',
  location: '',
  email: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
  terms: false
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required('El nombre es obligatorio'),
  lastname: Yup.string()
    .required('El apellido es obligatorio'),
  birthday: Yup.date()
    .required('La fecha de nacimiento es obligatoria')
    .max(new Date(), 'La fecha no puede ser en el futuro'),
  dni: Yup.string()
    .required('El DNI es obligatorio'),
  gender: Yup.string()
    .required('El género es obligatorio')
    .oneOf(['1', '2'], 'Selecciona una opción válida'),
  country: Yup.string()
    .required('El país es obligatorio'),
  location: Yup.string()
    .required('La ubicación es obligatoria'),
  email: Yup.string()
    .email('El correo electrónico debe ser válido')
    .required('El correo electrónico es obligatorio'),
  phoneNumber: Yup.string()
    .required('El número de teléfono es obligatorio'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .min(6, 'La contraseña debe tener al menos 6 caracteres'),
  confirmPassword: Yup.string()
    .required('La confirmación de la contraseña es obligatoria')
    .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
  terms: Yup.boolean()
    .isTrue('Debe aceptar los términos y condiciones')
});

export const RegisterPage = () => {
  const { handleSubmit, getFieldProps, errors }
    = useFormik({
      initialValues: INITIAL_VALUES,
      onSubmit: value => console.log(value),
      validationSchema: validationSchema,
      validateOnChange: true,
      validateOnBlur: false
    })

  return (
    <div className="text-center pt-8 pb-20">
      <h2>Registrarme</h2>

      <p className="text-primary pt-2 pb-8">Datos personales</p>

      <form onSubmit={handleSubmit} className="space-y-4 pb-6">
        <CustomInputFormik errorMessage={errors?.name} getFieldFormikProps={getFieldProps} name="name" placeholder="Nombre" />

        <CustomInputFormik errorMessage={errors?.lastname} getFieldFormikProps={getFieldProps} name="lastname" placeholder="Apellido" />

        <CustomInputFormik type="date" errorMessage={errors?.birthday} getFieldFormikProps={getFieldProps} name="birthday" />

        <CustomInputFormik errorMessage={errors?.dni} getFieldFormikProps={getFieldProps} name="dni" placeholder="DNI" />


        <select className="rounded-lg border bg-transparent border-primary w-full h-[60px] px-4 outline-none text-secondary" {...getFieldProps('gender')}>
          <option value="">Selecciona una opción</option>
          <option value="1">Masculino</option>
          <option value="2">Femenino</option>
        </select>

        {errors?.gender && <p className="text-start text-red-600">{errors?.gender}</p>}


        <CustomInputFormik errorMessage={errors?.country} getFieldFormikProps={getFieldProps} name="country" placeholder="País" />

        <CustomInputFormik errorMessage={errors?.location} getFieldFormikProps={getFieldProps} name="location" placeholder="Localidad" />

        <hr />

        <p className="text-primary">Datos de contacto</p>

        <CustomInputFormik errorMessage={errors?.email} getFieldFormikProps={getFieldProps} name="email" placeholder="Email" />

        <CustomInputFormik errorMessage={errors?.phoneNumber} getFieldFormikProps={getFieldProps} name="phoneNumber" placeholder="Teléfono" />

        <p className="text-primary">Tu número de teléfono sólo será visible para quienes
          reserven asientos en viajes que hayas creado.</p>

        <CustomInputFormik errorMessage={errors?.password} getFieldFormikProps={getFieldProps} name="password" type="password" placeholder="Contraseña" />

        <CustomInputFormik errorMessage={errors?.confirmPassword} getFieldFormikProps={getFieldProps} type="password" name="confirmPassword" placeholder="Repetir Contraseña" />


        <div className="space-x-2 flex text-sm">
          <input type="checkbox" {...getFieldProps('terms')} />
          <label htmlFor="conditions" className=" text-primary">Acepto los <a href="#" className="underline text-tertiary font-bold">términos y condiciones</a></label>
        </div>

        {errors?.terms && <p className="text-start text-red-600">{errors?.terms}</p>}

        <button type="submit" className='bg-tertiary py-3 text-base text-white font-medium rounded-full w-full hover:bg-tertiary/90'>Crear cuenta</button>
      </form>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-primary">¿Ya tenés cuenta?</p>
        <Link to="/auth/login" className="underline text-tertiary font-bold hover:text-tertiary/80">Iniciar sesión</Link>
      </div>
    </div >
  )
}
