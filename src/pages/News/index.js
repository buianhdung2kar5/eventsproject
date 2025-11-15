import { dataNews } from '../../data/news/news'

import NewsCard from '../../components/News/NewCard'
export default function News() {
  const News = dataNews
  return (
    <section className="w-full flex flex-col items-center mt-8">
      <div className="w-[60%] flex flex-col gap-4">
        <h1
          className="text-[#090D00] text-center font-bold"
          style={{ fontSize: 'clamp(1.5rem,3vw,2.5rem)' }}
        >
          Tin tức & cập nhật
        </h1>
        <p
          className="text-[#6B7280] text-center"
          style={{ fontSize: 'clamp(0.9rem,1.5vw,1.1rem)' }}
        >
          Cập nhật những tin tức mới nhất về các sự kiện và hoạt động
        </p>
        <div className="grid grid-cols-3 gap-x-16 gap-y-8 p-4 px-0">
          {News.map((item) => {
            return <NewsCard item={item} key={item.id} />
          })}
        </div>
      </div>
      <div className="text-[#6B7280] p-4">Đã hiển thị hết mục tin tức</div>
    </section>
  )
}
