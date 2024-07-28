import { Link } from "react-router-dom"

import { useFormik } from 'formik'
import * as Yup from 'yup'

import { CustomInputFormik } from "@ui"
import toast from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { Gender, RegisterRequestData } from "../interfaces/auth.interface";

//todo: will be replaced with RegisterRequestData
interface RegisterFormValues {
  name: string;
  lastname: string;
  birthday: string;
  dni: string;
  gender: string;
  country: string;
  location: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
}

const INITIAL_VALUES: RegisterFormValues = {
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
    .oneOf(['MALE', 'FEMALE'], 'Selecciona una opción válida'),
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
      onSubmit: value => handleRegisterSubmit(value),
      validationSchema: validationSchema,
      validateOnChange: true,
      validateOnBlur: false
    })

  const { onRegister } = useAuth()

  const handleRegisterSubmit = (value: RegisterFormValues) => {
    const { name, lastname, dni, email, gender, password, phoneNumber } = value

    const data: RegisterRequestData = {
      name: name + lastname,
      dni, email,
      gender: (gender as Gender),
      password,
      phone_number: phoneNumber
    }

    toast.promise(onRegister(data), {
      loading: 'Cargando...',
      success: 'Bienvenido',
      error: error => error
    })
  }

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
          <option value="MALE">Masculino</option>
          <option value="FEMALE">Femenino</option>
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
