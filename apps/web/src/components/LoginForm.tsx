import { useState } from "react"
import { LoginFormValues } from "../../types"

const initialForm: LoginFormValues = {
    email: '',
    password: ''
}

const LoginForm = () => {
    const [formData, setFormData] = useState<LoginFormValues>(initialForm)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setFormData(initialForm)
        console.log(formData)
    }

    return (
        <form className="max-w-sm mx-auto border-gray-150 border mt-5 p-5 rounded shadow-xl" onSubmit={handleSubmit}>
            <h2 className="text-gray-700 font-bold text-xl mb-3">Bienvenido</h2>
            <input type="email" value={formData.email} name="email" placeholder="Email" onChange={handleChange} required className="mb-3 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none" />
            <input type="password" value={formData.password} name="password" placeholder="Password" onChange={handleChange} required className="mb-3 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none" />
            <p className="text-gray-700 text-end mb-3 cursor-pointer">Olvidaste tu contraseña?</p>

            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none">Iniciar Sesión</button>
        </form>
    )
}
export default LoginForm