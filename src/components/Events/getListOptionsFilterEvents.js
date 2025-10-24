export default function ListOpTionFilterEvents({ data }) {
  const options = Array.isArray(data) ? data : []
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white gap-8">
      <div className="w-[60%] flex flex-col items-center gap-4">
        <p className="font-bold text-[20px]">Danh mục sự kiện</p>
        <p className="text-[#6B7280] text-[16px]">
          Tìm kiếm sự kiện theo lĩnh vực bạn quan tâm
        </p>
      </div>
      <div className="w-[70%] grid grid-cols-3 justify-items-center gap-x-1 gap-y-4">
        {options?.map((item) => {
          return (
            <div
              className="flex items-center justify-center font-medium text-[14px] p-4 w-[50%] bg-white text-black border rounded-lg mx-auto"
              key={item.id}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    </div>
  )
}
