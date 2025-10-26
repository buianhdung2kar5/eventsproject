import { dataNews } from '../../data/news/news'

import NewsCard from '../../components/News/NewCard'
export default function News() {
  const News = dataNews
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-[60%] flex flex-col gap-4">
        <p className="text-[24px] text-[#090D00] p-1">Tin tức & cập nhật</p>
        <p className="text-[16px] text-[#6B7280] p-1">
          Cập nhật những tin tức mới nhất về các sự kiện và hoạt động
        </p>
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 p-4 px-0">
          {News.map((item) => {
            return <NewsCard item={item} />
          })}
        </div>
      </div>
      <div className="text-[#6B7280] p-4">Đã hiển thị hết mục tin tức</div>
    </section>
  )
}
