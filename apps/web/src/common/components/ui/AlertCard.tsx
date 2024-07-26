import { CheckIcon, FillCircleIcon } from "../icons"

interface Props {
  icon?: () => JSX.Element
  title?: string
  description?: string
  children?: React.ReactNode
}

export const AlertCard = ({ title, icon, description, children }: Props) => {
  const alertIcon = icon ? icon() : <CheckIcon />

  return (
    <div className="border-2 border-primary p-8 rounded-lg flex flex-col items-center gap-8 mt-8">
      <div className="flex relative justify-center items-center inset-0">
        <FillCircleIcon />
        <div className="flex absolute justify-center items-center inset-0">{alertIcon}</div>
      </div>

      {title && <p className="text-primary text-base font-semibold">{title}</p>}
      {description && <p className="text-center">{description}</p>}

      {children}
    </div>

  )
}
