import { CalendarIcon, Gear, MedalIcon, MessageIcon } from "@/common/components/icons"

export const Profile = () => {
  return (
    <div className="mt-8">
      <p className="text-lg text font-bold">Mi Perfil</p>
      <div className="border-2 border-primary p-8 rounded-lg flex flex-col gap-4 mt-3">
        <div className="flex gap-3">
          <Gear/> 
          <div className="flex flex-col ">
            <p className="text-sm font-semibold mb-1">Datos Personales</p>
            <div className="[&>p]:text-[#939393]">
              <p>Email: claudio@test.cl</p>
              <p>Tel: +56961016458</p>
              <p>DNI: 20178659</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="absolute ml-2 mt-1 rounded-full bg-red-500 h-4 w-4 flex place-content-center place-items-center">
            <p className="text-white">1</p>
          </div>
          <CalendarIcon fill="#6E7191"/>
          <p className="text-sm font-semibold mb-1">Tus Viajes</p>
        </div>
        <div className="flex gap-3">
          <MedalIcon/>
          <p className="text-sm font-semibold mb-1">Referencias</p>
        </div>
        <div className="flex gap-3 relative">
          <div className="absolute ml-3 mt-1 rounded-full bg-red-500 h-4 w-4 flex place-content-center place-items-center">
            <p className="text-white">1</p>
          </div>  
          <MessageIcon/>
          <p className="text-sm font-semibold mb-1">Mensajes</p>
        </div>
      </div>

    </div>
  )
}
