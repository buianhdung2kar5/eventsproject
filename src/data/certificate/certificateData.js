export const certificateMockData = [
  {
    id: 'EVENTS123-CERT-2025',
    eventName: 'Hội thảo Đổi mới sáng tạo và Khởi nghiệp 2025',
    studentName: 'Nguyễn Văn A',
    studentId: 'MSSV: SV2021001',
    issueDate: '18/03/2025',
    venue: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
    fieldOfStudy: 'Bộ Khoa học và Công nghệ',
    completionDate: '24/10/2025',
    status: 'Hợp lệ',
    certificate: 'Chứng chỉ sinh viên 5 tốt',
  },
  {
    id: 'EVENTS124-CERT-2025',
    eventName: 'Hội nghị Công nghệ Thông tin 2025',
    studentName: 'Trần Thị B',
    studentId: 'MSSV: SV2021002',
    issueDate: '20/03/2025',
    venue: 'Đại học Bách Khoa Hà Nội',
    fieldOfStudy: 'Công nghệ Thông tin',
    completionDate: '25/10/2025',
    status: 'Hợp lệ',
    certificate: 'Chứng chỉ sinh viên 5 tốt',
  },
]

export const lookupGuideData = {
  title: 'Hướng dẫn tra cứu',
  items: [
    'Mỗi hồ sơ được gắn một mã duy nhất email bạn khi hoàn thành sự kiện',
    'Bạn có thể tra cứu bằng mã hồ sơ này để xác minh tính hợp lệ của hồ sơ',
    'Kết quả nhận hồ sơ, nhập các yêu cầu mã cách nhau bởi dấu phẩy',
    'Hồ sơ có thể tải về dưới định dạng PDF và in ra trực tiếp nếu cần',
    'Thử mã demo: Events',
  ],
}

export const certificateSections = [
  {
    id: 'section1',
    title: 'Mô tra cứu',
    description: 'Tra nhiều hồ sơ bằng cách nhập đầy phẩy giữa các mã',
  },
  {
    id: 'section2',
    title: 'Mã hồ sơ hoặc mã sự kiện',
    description: 'Events\nCó thể nhập nhiều mã cách nhau bởi dấu phẩy',
  },
]
