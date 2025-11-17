// Dữ liệu giả lập
const mockActivities = [
  {
    id: 1,
    title: 'Ngày hội Khởi nghiệp Sinh viên',
    tags: ['Khởi nghiệp', 'Speaker'],
    date: '2025-12-05',
    location: 'ĐH Bách Khoa TP.HCM',
    notes: 'Diễn giả chia sẻ về AI Startup',
    image: `${process.env.PUBLIC_URL + '/image/listEvents/18.png'}`,
  },
  {
    id: 2,
    title: 'Hội thảo Định hướng Nghề nghiệp',
    tags: ['Định hướng nghề nghiệp', 'Speaker'],
    date: '2025-11-28',
    location: 'ĐH Ngoại thương',
    notes: null,
    image: `${process.env.PUBLIC_URL + '/image/listEvents/Summit.png'}`,
  },
  {
    id: 3,
    title: 'Hội thảo công nghệ AI 2025',
    tags: ['Công nghệ', 'Speaker'],
    date: '2025-11-15',
    location: 'ĐH Bách Khoa Hà Nội',
    notes: 'Hoàn thành workshop và bài tập thực hành',
    image: `${process.env.PUBLIC_URL + '/image/listEvents/AiImage.png'}`,
  },
]

const Tag = ({ text, color = 'bg-green-100 text-green-700' }) => (
  <span
    className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${color} mr-2`}
  >
    {text}
  </span>
)

export const ActivityItem = ({ activity }) => {
  // Logic để xác định màu thẻ (chỉ ví dụ)
  const getTagColor = (tag) => {
    if (tag === 'Có chứng chỉ') return 'bg-yellow-100 text-yellow-700'
    if (tag === 'Speaker') return 'bg-blue-100 text-blue-700'
    return 'bg-gray-100 text-gray-700'
  }

  return (
    <div className="flex items-start p-4 border rounded-lg mb-4 hover:shadow-md transition duration-150 bg-white">
      <div className="w-6 text-center text-gray-400 cursor-move mr-3 mt-1">
        {/* Icon kéo thả (Drag handle) */}
        <span className="block mb-1">⋮</span>
        <span className="block">⋮</span>
      </div>

      <div className="flex-shrink-0 mr-4">
        <img
          src={activity.image}
          alt={activity.title}
          className="w-16 h-16 object-cover rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h3 className="font-semibold text-lg mb-1">{activity.title}</h3>
        <div className="mb-2">
          {activity.tags.map((tag) => (
            <Tag key={tag} text={tag} color={getTagColor(tag)} />
          ))}
        </div>
        <p className="text-sm text-gray-600">
          {activity.date} · {activity.location}
        </p>
        {activity.notes && (
          <p className="text-sm text-blue-500 mt-1 hover:underline cursor-pointer">
            {activity.notes}
          </p>
        )}
      </div>

      <button className="text-gray-400 hover:text-red-500 ml-4 flex-shrink-0">
        {/* Icon Xóa */}×
      </button>
    </div>
  )
}

export const ActivitiesSection = () => {
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-base font-semibold text-gray-700">
          Nội dung hồ sơ ({mockActivities.length} hoạt động)
        </h2>
        <button className="btn-secondary bg-blue-500 text-white rounded-full px-4 py-2 flex items-center hover:bg-blue-600 transition">
          {/* Icon Thêm hoạt động */}
          <span className="mr-1">+</span> Thêm hoạt động
        </button>
      </div>

      {mockActivities.map((activity) => (
        <ActivityItem key={activity.id} activity={activity} />
      ))}
    </section>
  )
}
