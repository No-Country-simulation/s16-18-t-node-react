export const TravelCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-[#E7E0FA] rounded-t-xl flex justify-between py-3 px-5">
        <div className="truncate mr-4 space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
            <div className="space-y-2">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-gray-300 rounded-full"></span>
            <div className="space-y-2">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
              <div className="w-32 h-4 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-gray-300 rounded-full"></div>
          <div className="space-y-2">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>

      <div className="py px-5 rounded-b-xl flex justify-between">
        <div className="w-[50%] py-2 flex flex-col gap-1 border-r-2 border-r-gray-300">
          <div className="w-16 h-3 bg-gray-300 rounded mb-2"></div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>

        <div className="py-2 flex flex-col gap-1">
          <div className="w-16 h-3 bg-gray-300 rounded mb-2"></div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}