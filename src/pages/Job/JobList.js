import CardItem from '../../ui/CardItem'
export default function JobList() {
  const items = [
    {
      id: 1,
      img: '/images/Logo.png',
      name: 'Tuyển dụng nhân viên hậu cần sự kiện',
      organization: 'Công ty TNHH Sự kiện ABC',
      date: '20/10/2024',
      hours: '8:00 - 17:00',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      memberResgiter: 5,
      slots: 10,
      benefit: [
        'Lương hấp dẫn',
        'Môi trường làm việc năng động',
        'Cơ hội thăng tiến',
      ],
      category: 'Hậu cần',
    },
    {
      id: 2,
      img: '/images/Logo.png',
      name: 'Tuyển dụng nhân viên hậu cần sự kiện',
      organization: 'Công ty TNHH Sự kiện ABC',
      date: '20/10/2024',
      hours: '8:00 - 17:00',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      memberResgiter: 5,
      slots: 10,
      benefit: [
        'Lương hấp dẫn',
        'Môi trường làm việc năng động',
        'Cơ hội thăng tiến',
      ],
      category: 'Hậu cần',
    },
    {
      id: 3,
      img: '/images/Logo.png',
      name: 'Tuyển dụng nhân viên hậu cần sự kiện',
      organization: 'Công ty TNHH Sự kiện ABC',
      date: '20/10/2024',
      hours: '8:00 - 17:00',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      memberResgiter: 5,
      slots: 10,
      benefit: [
        'Lương hấp dẫn',
        'Môi trường làm việc năng động',
        'Cơ hội thăng tiến',
      ],
      category: 'Hậu cần',
    },
    {
      id: 4,
      img: '/images/Logo.png',
      name: 'Tuyển dụng nhân viên hậu cần sự kiện',
      organization: 'Công ty TNHH Sự kiện ABC',
      date: '20/10/2024',
      hours: '8:00 - 17:00',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      memberResgiter: 5,
      slots: 10,
      benefit: [
        'Lương hấp dẫn',
        'Môi trường làm việc năng động',
        'Cơ hội thăng tiến',
      ],
      category: 'Hậu cần',
    },
    {
      id: 5,
      img: '/images/Logo.png',
      name: 'Tuyển dụng nhân viên hậu cần sự kiện',
      organization: 'Công ty TNHH Sự kiện ABC',
      date: '20/10/2024',
      hours: '8:00 - 17:00',
      address: '123 Đường ABC, Quận 1, TP.HCM',
      memberResgiter: 5,
      slots: 10,
      benefit: [
        'Lương hấp dẫn',
        'Môi trường làm việc năng động',
        'Cơ hội thăng tiến',
      ],
      category: 'Hậu cần',
    },
  ]
  return (
    <div className="w-[90%] mx-auto grid grid-cols-4 my-12 gap-x-4 gap-y-8">
      {items.map((item) => (
        <div>
          <CardItem
            key={item.id}
            item={item}
            type={'job'}
            viewDetail={(id) =>
              console.log('View details for job with id:', id)
            }
          />
        </div>
      ))}
    </div>
  )
}
