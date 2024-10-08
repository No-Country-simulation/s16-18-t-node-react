import { FieldConfig, FieldInputProps } from "formik"

import { cn } from "@/common/utils"
import { ExclamationError } from "../icons"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

interface Props extends InputProps {
  icon?: () => JSX.Element
  title?: string
  name: string
  getFieldFormikProps: (nameOrOptions: string | FieldConfig<undefined>) => FieldInputProps<undefined>
  errorMessage?: string
}

export const CustomInputFormik = ({ icon, title, className, getFieldFormikProps, name, errorMessage, ...props }: Props) => {
  return (
    <>
      <div className='relative'>
        <input
          {...getFieldFormikProps(name)}

          type="text"
          className={
            cn("rounded-lg border border-primary w-full h-[60px] pl-4 pr-4 outline-none      transition-all duration-300", {
              'pt-4 pb-2': title,
              'pl-10': icon,
              'border-red-600 pr-8': errorMessage
            })
          }
          {...props}
        >
        </input>

        <div className='absolute inset-0 flex items-center w-fit pl-4'>
          {icon ? icon() : null}
        </div>

        <h3 className='absolute top-[8px] left-10 uppercase text-xs'>{title}</h3>

        {errorMessage && (
          <div className="absolute top-[35%] right-0 pr-3 transition-all duration-1000">
            <ExclamationError />
          </div>
        )}

      </div >

      {errorMessage && <p className="text-start text-red-600">{errorMessage}</p>}
    </>
  )

}