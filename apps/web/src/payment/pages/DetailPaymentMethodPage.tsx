import { CheckCircleIcon, CheckedCircleIcon, LockIcon } from "@icons"
import { useState } from "react"

interface PAYMENT {
  id: string
  name: string
}

const PAYMENT_METHODS: PAYMENT[] = [
  {
    id: 'sdfsdfsd',
    name: 'Mercado Pago'
  },
  {
    id: 'fdfsdfsdfsd',
    name: 'Tarjeta de debito'
  },
  {
    id: 'dfsd',
    name: 'Transferencia bancaria'
  }
]

export const DetailPaymentMethodPage = () => {

  const [selectedMethod, setSelectedMethod] = useState<PAYMENT | null>()

  const handleToggleMethod = (paymentMethod: PAYMENT) => {
    // if (selectedMethod?.id === paymentMethod.id) return setSelectedMethod(null)
    setSelectedMethod(paymentMethod)
  }

  return (
    <section className="flex flex-col gap-4 mt-8">
      <h2>Selecciona tu método de pago</h2>
      <div>
        {
          PAYMENT_METHODS?.map(payment => {
            const isSelected = selectedMethod?.id === payment.id

            return (
              <div key={payment.id} className={`flex items-center gap-4 rounded-lg p-4 duration-200 hover:cursor-pointer ${isSelected && 'bg-gray-100'}`} onClick={() => handleToggleMethod(payment)}>

                {
                  isSelected
                    ? (<CheckedCircleIcon />)
                    : (<CheckCircleIcon />)
                }

                <p className='text-lg text-primary'>{payment.name}</p>
              </div>
            )
          })
        }
      </div>

      <hr className="border-b-2 mt-1.5" />

      <div className="flex gap-2">
        <span><LockIcon /></span>

        <p className="text-primary">Tu pago se realiza de forma completamente segura.
          Al hacer esta compra, aceptas las condiciones <a className="underline">link a condiciones.</a></p>
      </div>

      <div className='flex justify-center'>
        <button className='bg-[#A996FF] text-xs text-primary px-8 py-1.5 rounded-full'>Pagar <strong>$4.000</strong></button>
      </div>
    </section>
  )
}
