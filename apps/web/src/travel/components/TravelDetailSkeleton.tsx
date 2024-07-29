export const TravelDetailSkeleton = () => {
  return (
    <section className='space-y-4'>
      <div className="grid grid-cols-5">
        <div className="space-y-2 col-span-3">
          <div className='relative flex flex-col gap-2 bg-gray-200 p-3 animate-pulse'>
            <div className='border-s h-[15.5px] border-dashed absolute top-5 left-[7.5px] border-gray-400'></div>

            <div className='flex gap-2 items-center'>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <p className='bg-gray-300 h-4 w-1/2 rounded'></p>
            </div>

            <div className='flex gap-2 items-center'>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <p className='bg-gray-300 h-4 w-1/2 rounded'></p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className='flex gap-2 items-center ml-2'>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <p className='bg-gray-300 h-4 w-1/2 rounded'></p>
            </div>

            <div className='flex gap-2 items-center ml-2'>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <p className='bg-gray-300 h-4 w-1/2 rounded'></p>
            </div>

            <div className='flex items-center gap-2 border-y-2 py-2 bg-gray-200 animate-pulse'>
              <div className='bg-gray-300 rounded-full w-6 h-6 ml-2'></div>
              <p className='bg-gray-300 h-4 w-1/4 rounded'></p>
              <a className='bg-gray-300 h-4 w-1/6 rounded'></a>
            </div>


            <div className='flex items-center gap-2 py-2 bg-gray-200 animate-pulse'>
              <div className='bg-gray-300 rounded-full w-6 h-6 ml-2'></div>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <div className='bg-gray-300 rounded-full w-6 h-6'></div>
              <a className='bg-gray-300 h-4 w-1/6 rounded'></a>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gray-200 animate-pulse py-5 px-4'>
        <div className='flex items-center gap-1'>
          <div className='bg-gray-300 rounded-full w-8 h-8'></div>
          <p className='bg-gray-300 h-4 w-24 rounded'></p>
          <div className='bg-gray-300 rounded-full w-6 h-6'></div>
          <p className='bg-gray-300 h-4 w-8 rounded'></p>
          <span className='bg-gray-300 h-4 w-16 rounded'></span>
        </div>

        <div className="border-t-2 flex gap-1 bg-gray-200 animate-pulse py-2">
          <p className='bg-gray-300 h-4 w-1/3 rounded'></p>
          <p className='bg-gray-300 h-4 w-2/3 rounded'></p>
        </div>

        <div className="border-t-2 bg-gray-200 animate-pulse py-2">
          <p className='bg-gray-300 h-4 w-full rounded'></p>
        </div>

        <div className="flex place-items-center gap-5 border-t-2 bg-gray-200 animate-pulse py-2">
          <div className="bg-gray-300 h-24 w-24 rounded"></div>
          <div className="flex flex-col items-end">
            <h1 className='bg-gray-300 h-6 w-24 rounded'></h1>
            <p className='bg-gray-300 h-4 w-24 rounded'></p>
          </div>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='bg-gray-300 text-gray-600 px-4 py-1.5 rounded-[30px] w-[302px] h-[39px] font-medium animate-pulse'></div>
      </div>
    </section>
  );
}
