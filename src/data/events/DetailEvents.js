export const DetailEvents = [
  // 1. Hội thảo AI 2025
  {
    id: 1,
    img: '/image/listEvents/AiImage.png',
    category: 'Công nghệ',
    name: 'Hội thảo AI 2025',
    address: 'Hà Nội',
    hours: '09:00',
    date: '20/11/2025',
    organization: 'Đại học BKHN',
    memberResgiter: 19,
    slots: 500,
    price: 'Miễn phí',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Ba, 01/10/2025',
    school: 'ĐH Bách Khoa Hà Nội',
    location: 'Giảng đường 101, Đại học Bách khoa Hà Nội',
    speakers: [
      { name: 'TS. Nguyễn Văn A', title: 'Chuyên gia AI tại FPT' },
      { name: 'ThS. Trần Thị B', title: 'Lead AI Engineer Google' },
    ],
    aboutEvent:
      'Khám phá những xu hướng mới nhất trong lĩnh vực trí tuệ nhân tạo và machine learning. Sự kiện quy tụ các chuyên gia hàng đầu trong ngành. Sinh viên tham dự sẽ nhận chứng chỉ sinh viên 5 tốt.',
    mainContent: [
      'Tổng quan về AI và Machine Learning hiện đại',
      'Ứng dụng AI trong thực tế doanh nghiệp',
      'Demo và workshop thực hành',
      'Q&A với chuyên gia',
    ],
    targetAudience:
      'Sinh viên các ngành Công nghệ thông tin, Khoa học máy tính, và các bạn quan tâm đến AI',
    benefits: [
      'Chứng chỉ tham gia được công nhận cho sinh viên 5 tốt',
      'Điểm rèn luyện: 5 điểm',
      'Tài liệu hội thảo độc quyền',
      'Cơ hội networking với chuyên gia',
    ],
    object: 'Sinh viên',
  },
  // 2. Triển lãm Robot Quốc tế
  {
    id: 2,
    img: '/image/listEvents/Robot.png',
    category: 'Công nghệ',
    name: 'Triển lãm Robot Quốc tế',
    address: 'TP. Hồ Chí Minh',
    hours: '13:30',
    date: '15/12/2025',
    organization: 'SaigonTech',
    memberResgiter: 120,
    slots: 1000,
    price: '150000',
    certificate: 'Triển lãm',
    eventType: 'Triển lãm', // <-- Đã thêm
    registrationOpen: 'Thứ Tư, 15/10/2025',
    school: 'ĐH Kinh Tế Quốc Dân',
    location: 'Trung tâm Triển lãm SECC, TP. Hồ Chí Minh',
    speakers: [
      { name: 'GS. Koji Tanaka', title: 'Nhà sáng lập RobotX' },
      { name: 'TS. Lê Minh Dũng', title: 'Giám đốc R&D TechCorp' },
    ],
    aboutEvent:
      'Trình diễn các thế hệ robot công nghiệp, y tế và robot dân dụng tiên tiến nhất từ khắp nơi trên thế giới. Cơ hội chiêm ngưỡng công nghệ tự động hóa đột phá.',
    mainContent: [
      'Giới thiệu robot thế hệ 5.0',
      'Khu vực trải nghiệm robot y tế và phẫu thuật',
      'Cuộc thi lập trình robot mini',
      'Giao lưu với các kỹ sư robot hàng đầu',
    ],
    targetAudience:
      'Sinh viên ngành Cơ điện tử, Kỹ thuật Tự động hóa, và công chúng yêu thích robot/công nghệ.',
    benefits: [
      'Vé tham quan miễn phí các khu vực đặc biệt (cho 50 sinh viên đầu tiên)',
      'Cơ hội thực tập tại các công ty robot hàng đầu',
      'Tài liệu về các mẫu robot mới nhất',
      'Chứng nhận tham gia triển lãm',
    ],
    object: 'Tất cả',
  },
  // 3. Startup Summit Việt Nam
  {
    id: 3,
    img: '/image/listEvents/Summit.png',
    category: 'Kinh doanh',
    name: 'Startup Summit Việt Nam',
    address: 'Hà Nội',
    hours: '08:00',
    date: '10/09/2025',
    organization: 'VietStartup',
    memberResgiter: 350,
    slots: 500,
    price: 'Miễn phí',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Ba, 26/08/2025',
    school: 'ĐH Sư Phạm Hà Nội',
    location: 'Khách sạn Novotel, Đà Nẵng',
    speakers: [
      { name: 'Ông Đỗ Hoàng Cường', title: 'CEO GreenVest (Quỹ đầu tư)' },
      { name: 'Bà Mai Thị Hương', title: 'Nhà sáng lập FoodTech' },
    ],
    aboutEvent:
      'Diễn đàn thường niên quy tụ các nhà đầu tư, nhà sáng lập và chuyên gia khởi nghiệp. Chia sẻ kinh nghiệm gọi vốn, xây dựng mô hình kinh doanh bền vững và mở rộng thị trường.',
    mainContent: [
      'Xu hướng gọi vốn và định giá Startup 2025',
      'Chiến lược MKT cho sản phẩm công nghệ',
      'Pitching Day: Trình bày dự án trước nhà đầu tư',
      'Networking và tư vấn 1-1 với cố vấn',
    ],
    targetAudience:
      'Sinh viên có ý tưởng khởi nghiệp, các nhóm Startup giai đoạn đầu, và những người quan tâm đến đầu tư mạo hiểm.',
    benefits: [
      'Cơ hội gặp gỡ 10+ nhà đầu tư (Angel & VC)',
      'Ebook: 100 Case Study Startup thành công',
      'Giảm giá 50% khóa học Biz-Model',
      'Chứng nhận tham gia hội nghị',
    ],
    object: 'Tất cả',
  },
  // 4. Hội thảo Giáo dục Số
  {
    id: 4,
    img: '/image/listEvents/Educate.png',
    category: 'Giáo dục',
    name: 'Hội thảo Giáo dục Số',
    address: 'Hà Nội',
    hours: '14:00',
    date: '05/08/2025',
    organization: 'ĐH Sư phạm Hà Nội',
    memberResgiter: 180,
    slots: 300,
    price: 'Miễn phí',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Sáu, 18/07/2025',
    school: 'ĐH Sư Phạm Hà Nội',
    location: 'Phòng Hội thảo, ĐH Sư phạm Hà Nội',
    speakers: [
      {
        name: 'PGS. TS. Phạm Việt Đức',
        title: 'Viện trưởng Viện NC Giáo dục Số',
      },
      { name: 'Bà Nguyễn Thị Lan', title: 'Chuyên gia Thiết kế học tập' },
    ],
    aboutEvent:
      'Thảo luận về ứng dụng công nghệ trong giảng dạy và học tập. Tập trung vào các công cụ AI và nền tảng thực tế ảo (VR/AR) giúp nâng cao chất lượng giáo dục.',
    mainContent: [
      'Chuyển đổi số trong môi trường đại học',
      'Công cụ AI hỗ trợ cá nhân hóa học tập',
      'Phòng lab ảo (Virtual Lab) trong giảng dạy khoa học',
      'Hướng dẫn sử dụng các nền tảng E-learning tiên tiến',
    ],
    targetAudience:
      'Giáo viên, giảng viên, sinh viên ngành Sư phạm, Công nghệ Giáo dục, và phụ huynh quan tâm.',
    benefits: [
      'Bộ tài liệu về xu hướng EdTech toàn cầu',
      'Tài khoản dùng thử nền tảng học tập VR/AR 3 tháng',
      'Giấy chứng nhận tham gia (được công nhận bởi ĐH Sư phạm)',
      'Cơ hội tham gia nhóm nghiên cứu EdTech',
    ],
    object: 'Tất cả',
  },
  // 5. Công nghệ trong Chăm sóc Sức khỏe
  {
    id: 5,
    img: '/image/listEvents/Health.png',
    category: 'Y tế',
    name: 'Công nghệ trong Chăm sóc Sức khỏe',
    address: 'Cần Thơ',
    hours: '09:30',
    date: '12/10/2025',
    organization: 'Bộ Y tế',
    memberResgiter: 210,
    slots: 400,
    price: '200000',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Hai, 08/09/2025',
    school: 'ĐH Sư Phạm Hà Nội',
    location: 'Bệnh viện Đa khoa Cần Thơ',
    speakers: [
      {
        name: 'BS. CKII. Trần Hữu Lộc',
        title: 'Trưởng khoa Tim mạch BV Chợ Rẫy',
      },
      { name: 'Ông Mai Thanh Tùng', title: 'CTO MedTech Solutions' },
    ],
    aboutEvent:
      'Phân tích vai trò của Big Data, AI và IoT trong chẩn đoán, điều trị và quản lý sức khỏe cộng đồng. Hướng tới y tế thông minh và cá nhân hóa.',
    mainContent: [
      'AI trong phân tích hình ảnh y khoa (CT, MRI)',
      'Ứng dụng Hồ sơ sức khỏe điện tử (EHR)',
      'Thiết bị đeo thông minh (Wearable Devices) theo dõi sức khỏe',
      'Tọa đàm về chính sách y tế số',
    ],
    targetAudience:
      'Bác sĩ, dược sĩ, nhân viên y tế, sinh viên ngành Y Dược, Công nghệ sinh học và Công nghệ thông tin.',
    benefits: [
      'Sách chuyên khảo về Y tế số mới nhất',
      'Điểm CME (Chứng chỉ đào tạo liên tục) cho cán bộ y tế',
      'Cơ hội thăm quan Bệnh viện thông minh tại Cần Thơ',
      'Chứng nhận tham gia hội thảo chuyên ngành',
    ],
    object: 'Tất cả',
  },
  // 6. Diễn đàn Blockchain & Fintech 2025
  {
    id: 6,
    img: '/image/listEvents/BlockChainFinTech.png',
    category: 'Tài chính',
    name: 'Diễn đàn Blockchain & Fintech 2025',
    address: 'TP. Hồ Chí Minh',
    hours: '10:00',
    date: '22/06/2025',
    organization: 'VietFinTech',
    memberResgiter: 270,
    slots: 600,
    price: 'Miễn phí',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Năm, 15/05/2025',
    school: 'ĐH Kinh Tế Quốc Dân',
    location: 'Tòa nhà Bitexco, TP. Hồ Chí Minh',
    speakers: [
      { name: 'Ông Phan Anh Tú', title: 'CEO VCB Digital Bank' },
      { name: 'Bà Hoàng Thu Trang', title: 'Chuyên gia Blockchain & DeFi' },
    ],
    aboutEvent:
      'Cập nhật các xu hướng Blockchain, DeFi và các giải pháp thanh toán số mới. Thảo luận về khung pháp lý và tiềm năng phát triển của Fintech tại Việt Nam.',
    mainContent: [
      'Ứng dụng Blockchain trong chuỗi cung ứng và ngân hàng',
      'Sự trỗi dậy của Tài chính Phi tập trung (DeFi)',
      'Tương lai của Thanh toán số và Ví điện tử',
      'Workshop: Xây dựng hợp đồng thông minh (Smart Contract) cơ bản',
    ],
    targetAudience:
      'Sinh viên ngành Tài chính, Ngân hàng, CNTT, và các chuyên gia, nhà đầu tư trong lĩnh vực Fintech/Crypto.',
    benefits: [
      'Cơ hội tham gia "Fintech Mentorship Program"',
      'Tài liệu độc quyền về báo cáo thị trường Blockchain Việt Nam 2025',
      'Giảm giá tham gia các sự kiện của VietFinTech',
      'Chứng nhận tham dự diễn đàn',
    ],
    object: 'Tất cả',
  },
  // 7. Hội nghị Năng lượng Xanh
  {
    id: 7,
    img: '/image/listEvents/GreenEnergy.png',
    category: 'Môi trường',
    name: 'Hội nghị Năng lượng Xanh',
    address: 'Hà Nội',
    hours: '08:30',
    date: '30/07/2025',
    organization: 'GreenFuture',
    memberResgiter: 400,
    slots: 800,
    price: '100000',
    certificate: 'Talkshow',
    eventType: 'Talkshow', // <-- Đã thêm
    registrationOpen: 'Thứ Hai, 23/06/2025',
    school: 'ĐH Bách Khoa Hà Nội',
    location: 'Trung tâm Hội nghị Quốc gia, Hà Nội',
    speakers: [
      {
        name: 'TS. Nguyễn Mạnh Hùng',
        title: 'Giám đốc Viện NL Tái tạo Quốc gia',
      },
      {
        name: 'Ông Peter Smith',
        title: 'Chuyên gia Chiến lược Năng lượng Sạch, UNDP',
      },
    ],
    aboutEvent:
      'Nghiên cứu các giải pháp phát triển năng lượng mặt trời, gió và hydrogen. Đánh giá tác động kinh tế và môi trường của việc chuyển đổi năng lượng tại Việt Nam.',
    mainContent: [
      'Điện mặt trời mái nhà và chính sách mới',
      'Công nghệ pin lưu trữ và lưới điện thông minh (Smart Grid)',
      'Kinh tế tuần hoàn và năng lượng sinh khối',
      'Thảo luận: Lộ trình Net-Zero của Việt Nam',
    ],
    targetAudience:
      'Sinh viên ngành Môi trường, Năng lượng, Kỹ thuật Điện, đại diện doanh nghiệp và cơ quan quản lý nhà nước.',
    benefits: [
      'Tài liệu về các dự án năng lượng tái tạo mới nhất',
      'Vé tham quan miễn phí nhà máy điện mặt trời mẫu',
      'Điểm rèn luyện cho sinh viên và chứng nhận tham gia hội nghị',
      'Cơ hội việc làm/thực tập tại các công ty năng lượng xanh',
    ],
    object: 'Tất cả',
  },
  // 8. Creative Design Week 2025
  {
    id: 8,
    img: '/image/listEvents/Design.png',
    category: 'Thiết kế',
    name: 'Creative Design Week 2025',
    address: 'Hà Nội',
    hours: '09:00',
    date: '17/05/2025',
    organization: 'DesignHub',
    memberResgiter: 150,
    slots: 300,
    price: 'Miễn phí',
    certificate: 'Workshop',
    eventType: 'Workshop', // <-- Đã thêm
    registrationOpen: 'Thứ Ba, 01/04/2025',
    school: 'ĐH Bách Khoa Hà Nội',
    location: 'Không gian sáng tạo, Đà Nẵng',
    speakers: [
      { name: 'Ông Lê Công Minh', title: 'Art Director, Dentsu Vietnam' },
      { name: 'Bà Jessica Chen', title: 'UX/UI Lead, TechGlobal' },
    ],
    aboutEvent:
      'Tuần lễ sáng tạo dành cho cộng đồng thiết kế, tập trung vào xu hướng UI/UX, thiết kế đa nền tảng và ứng dụng của AI trong sáng tạo nghệ thuật.',
    mainContent: [
      'Workshop: Thiết kế giao diện di động (Mobile UI) nâng cao',
      'Tọa đàm: Vai trò của AI trong Graphic Design',
      'Xu hướng Motion Graphics 2025',
      'Portfolio Review và kết nối chuyên môn',
    ],
    targetAudience:
      'Sinh viên ngành Thiết kế đồ họa, Thiết kế đa phương tiện, UX/UI, và các bạn trẻ đam mê sáng tạo.',
    benefits: [
      'Ebook: 50 công cụ AI hữu ích cho Designer',
      'Tham gia cuộc thi thiết kế với giải thưởng hấp dẫn',
      'Phiếu giảm giá phần mềm thiết kế',
      'Chứng nhận tham gia Workshop',
    ],
    object: 'Sinh viên',
  },
  // 9. Cyber Security Vietnam 2025
  {
    id: 9,
    img: '/image/listEvents/CyberSecurity.png',
    category: 'An ninh mạng',
    name: 'Cyber Security Vietnam 2025',
    address: 'Hà Nội',
    hours: '10:00',
    date: '11/04/2025',
    organization: 'VN-CERT',
    memberResgiter: 500,
    slots: 700,
    price: '250000',
    certificate: 'Training',
    eventType: 'Training', // <-- Đã thêm
    registrationOpen: 'Thứ Hai, 10/03/2025',
    school: 'ĐH Kinh Tế Quốc Dân',
    location: 'Tòa nhà VN-CERT, Hà Nội',
    speakers: [
      {
        name: 'Đại tá Trần Văn Dũng',
        title: 'Phó Cục trưởng Cục An ninh mạng',
      },
      { name: 'Ông Mark Davis', title: 'CEO CyberDefense Asia' },
    ],
    aboutEvent:
      'Chương trình đào tạo chuyên sâu về các mối đe dọa an ninh mạng hiện đại, kỹ thuật tấn công và phòng thủ mạng. Cập nhật các quy định bảo mật mới nhất.',
    mainContent: [
      'Phòng chống Ransomware và Zero-Day attacks',
      'Phân tích mã độc và kỹ thuật đảo ngược',
      'Bảo mật đám mây (Cloud Security) và IoT',
      'Thực hành: Xây dựng tường lửa và hệ thống phát hiện xâm nhập (IDS)',
    ],
    targetAudience:
      'Chuyên gia an ninh mạng, Kỹ sư CNTT, sinh viên ngành An toàn thông tin, và quản trị hệ thống.',
    benefits: [
      'Chứng chỉ hoàn thành khóa đào tạo chuyên sâu (Training)',
      'Tài liệu khóa học độc quyền và Lab thực hành',
      'Cơ hội tham gia mạng lưới chuyên gia bảo mật VN-CERT',
      'Giảm 50% phí thi chứng chỉ quốc tế',
    ],
    object: 'Tất cả',
  },
  // 10. Hội nghị Nông nghiệp Thông minh
  {
    id: 10,
    img: '/image/listEvents/Agriculture.png',
    category: 'Nông nghiệp',
    name: 'Hội nghị Nông nghiệp Thông minh',
    address: 'Lâm Đồng',
    hours: '08:00',
    date: '25/03/2025',
    organization: 'AgriTech Việt Nam',
    memberResgiter: 260,
    slots: 500,
    price: 'Miễn phí',
    certificate: 'Workshop',
    eventType: 'Workshop', // <-- Đã thêm
    registrationOpen: 'Thứ Tư, 20/02/2025',
    school: 'ĐH Kinh Tế Quốc Dân',
    location: 'Trung tâm Nông nghiệp, Lâm Đồng',
    speakers: [
      { name: 'TS. Phan Thị Mai', title: 'Chuyên gia Nông nghiệp Hữu cơ' },
      { name: 'Ông Bùi Quang Huy', title: 'CTO Farm Automation' },
    ],
    aboutEvent:
      'Trình bày các giải pháp công nghệ cao ứng dụng trong trồng trọt và chăn nuôi. Tập trung vào IoT, AI và Big Data để tối ưu hóa năng suất và giảm thiểu chi phí.',
    mainContent: [
      'Hệ thống tưới tiêu thông minh và cảm biến đất đai',
      'Ứng dụng Drone trong giám sát và phun thuốc',
      'Phân tích dữ liệu lớn để dự báo sâu bệnh',
      'Tham quan thực tế mô hình Farm 4.0',
    ],
    targetAudience:
      'Nông dân, kỹ sư nông nghiệp, sinh viên ngành Nông học, Công nghệ sinh học và các doanh nghiệp nông nghiệp.',
    benefits: [
      'Tặng bộ cảm biến đất cơ bản (cho 50 người đăng ký sớm)',
      'Tài liệu hướng dẫn xây dựng nhà kính thông minh',
      'Chứng nhận tham gia workshop thực hành',
      'Cơ hội kết nối với các quỹ đầu tư nông nghiệp',
    ],
    object: 'Tất cả',
  },
  // 11. Hội thảo Công nghệ AI 2025 (Cập nhật đầy đủ chi tiết)
  {
    id: 11,
    img: '/image/listEvents/AiImage.png',
    category: 'Công nghệ',
    name: 'Hội thảo Công nghệ AI 2025',
    address: 'Hà Nội',
    hours: '4 giờ',
    date: 'Đang công bố',
    organization: 'CLB Công nghệ BK',
    memberResgiter: 0,
    slots: 0,
    price: 'Miễn phí',
    certificate: 'Chứng chỉ có 5 điểm tốt',
    eventType: 'Có chứng chỉ sinh viên 5 tốt', // <-- Đã thêm
    registrationOpen: 'Đang mở',
    school: 'ĐH Bách Khoa Hà Nội',
    location: 'ĐH Bách Khoa Hà Nội',
    speakers: [
      { name: 'TS. Nguyễn Văn A', title: 'Chuyên gia AI tại FPT' },
      { name: 'ThS. Trần Thị B', title: 'Lead AI Engineer Google' },
    ],
    aboutEvent:
      'Khám phá những xu hướng mới nhất trong lĩnh vực trí tuệ nhân tạo và machine learning. Sự kiện quy tụ các chuyên gia hàng đầu trong ngành. Sinh viên tham dự sẽ nhận chứng chỉ sinh viên 5 tốt.',
    mainContent: [
      'Tổng quan về AI và Machine Learning hiện đại',
      'Ứng dụng AI trong thực tế doanh nghiệp',
      'Demo và workshop thực hành',
      'Q&A với chuyên gia',
    ],
    targetAudience:
      'Sinh viên các ngành Công nghệ thông tin, Khoa học máy tính, và các bạn quan tâm đến AI',
    benefits: [
      'Chứng chỉ tham gia được công nhận cho sinh viên 5 tốt',
      'Điểm rèn luyện: 5 điểm',
      'Tài liệu hội thảo độc quyền',
      'Cơ hội networking với chuyên gia',
    ],
    object: 'Sinh viên',
  },
]
