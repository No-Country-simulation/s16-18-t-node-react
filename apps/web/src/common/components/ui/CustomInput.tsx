import { SearchIcon } from "../icons"

import { cn } from "@/common/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

interface Props extends InputProps {
  icon?: () => JSX.Element
  searchButton?: boolean
  title: string
  handleClick?: () => void
  handleChange?: () => void
}

export const CustomInput = ({ handleChange, handleClick, icon, searchButton, title, className, ...props }: Props) => {
  return (
    <div className='relative'>
      <input
        type="text"
        onClick={handleClick}
        onChange={handleChange}
        className={
          cn("pt-4 pb-2 rounded-[10px] border border-primary w-full h-[60px] pl-10 pr-16", {
            'pr-3': !searchButton
          })
        }
        {...props}
      >
      </input>

      <div className='absolute top-0 px-[16px] flex flex-col items-center justify-center h-full'>
        {icon ? icon() : null}
      </div>

      <h3 className='absolute top-[8px] left-10 uppercase text-xs'>{title}</h3>

      {
        searchButton && (
          <button
            className='flex flex-col items-center justify-center bg-primary border-[5px] border-white size-[50px] rounded-full absolute top-1 right-2 placeholder-secondary'
            onClick={() => { }}
          >
            {searchButton && <SearchIcon />}
          </button>
        )
      }
    </div>
  )
}