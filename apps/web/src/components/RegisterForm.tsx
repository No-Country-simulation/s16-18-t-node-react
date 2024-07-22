import { useState } from "react"
import { RegisterFormValues } from "../../types"
import { Button } from "./ui/button"

const initialForm: RegisterFormValues = {
    firstName: '',
    lastName: '',
    city: '',
    phoneNumber: '',
    email: '',
    password: ''
}

const RegisterForm = () => {
    const [formData, setFormData] = useState<RegisterFormValues>(initialForm)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (e.target.name === 'password') {
            validatePassword(e.target.value)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.keys(errors).length != 0) return

        console.log(formData)
        setFormData(initialForm)
    }

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d)[A-Za-z\d!@#$%^&*]{8,}$/
        if (!passwordRegex.test(password)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: 'El Password debe contener al menos 8 caracteres, una mayúscula, un número y un símbolo.'
            }))
        } else {
            setErrors(prevErrors => {
                const { password, ...rest } = prevErrors
                return rest
            })
        }
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-xs mx-auto border-gray-300 lg:border mt-5 p-5 rounded shadow-none lg:shadow-lg">
            <h2 className="text-gray-700 font-bold text-xl mb-3">Ingresá tus datos</h2>
            <input autoFocus type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="mb-3 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none" placeholder="Nombre" />
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="mb-3 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="Apellido" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} required className="mb-3 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="Localidad" />
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} pattern="\d{10}" maxLength={10} title="El numero de telefono debe tener 10 digitos" required className="mb-3 border border-gray-400 rounded w-full py-2 px-3 text-gray-700  focus:outline-none " placeholder="Teléfono" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required className="mb-3 border border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} title={errors.password} required className="border border-gray-400 rounded w-full py-2 px-3 text-gray-700 focus:outline-none " placeholder="Password" />
            {errors.password && <p className="text-sm mt-0 text-red-500 text-start">{errors.password}</p>}
            <Button className="mt-5">Registrarme</Button>
        </form>
    )
}

export default RegisterForm