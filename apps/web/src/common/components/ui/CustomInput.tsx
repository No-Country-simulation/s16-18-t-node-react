import { SearchIcon } from "../icons"

import { cn } from "@/common/utils"

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

interface Props extends InputProps {
  icon: () => JSX.Element
  searchButton?: boolean
  title: string
}

export const CustomInput = ({ icon, searchButton, title, className, ...props }: Props) => {
  return (
    <div className='relative'>
      <input
        type="text"
        className={
          cn("pt-4 pb-2 rounded-[10px] border border-[#D3D3D3] w-full h-[60px] pl-10 pr-16", {
            'pr-3': !searchButton
          })
        }
        {...props}
      >
      </input>


      <div className='absolute top-0 px-[16px] flex flex-col items-center justify-center h-full'>
        {icon()}
      </div>

      <p className='absolute top-[8px] left-10 uppercase text-[12px]'>{title}</p>

      {
        searchButton && (
          <button
            className='flex flex-col items-center justify-center bg-[#D9DBE9] border-[5px] border-white size-[50px] rounded-full absolute top-1 right-2'
            onClick={() => { }}
          >
            {searchButton && <SearchIcon />}
          </button>
        )
      }
    </div>
  )
}