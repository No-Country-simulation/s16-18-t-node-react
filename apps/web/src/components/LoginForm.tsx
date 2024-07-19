import { useState } from "react"
import { LoginFormValues } from "../../types"
import { Button } from "./ui/button"

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
        <form className="max-w-xs mx-auto border-gray-150 lg:border mt-5 p-5 rounded shadow-none lg:shadow-lg" onSubmit={handleSubmit}>
            <h2 className="text-gray-700 font-bold text-xl mb-3">Bienvenido</h2>
            <input type="email" value={formData.email} name="email" placeholder="Email" onChange={handleChange} required className="mb-3 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none" />
            <input type="password" value={formData.password} name="password" placeholder="Password" onChange={handleChange} required className="mb-3 border border-gray-300 rounded w-full py-2 px-3 text-gray-700 focus:outline-none" />
            <p className="text-gray-700 text-end mb-3 cursor-pointer">Olvidaste tu contraseña?</p>

            <Button>Iniciar Sesion</Button>
        </form>
    )
}
export default LoginForm