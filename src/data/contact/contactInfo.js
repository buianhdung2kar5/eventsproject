export const contactInfo = {
    email: {
        title: "Email",
        primary: "info@event.vn",
        secondary: "support@event.vn"
    },
    phone: {
        title: "Điện thoại",
        hotline: "Hotline: 1900 xxxx",
        office: "Hỗ trợ: 024 xxxx xxxx"
    },
    address: {
        title: "Địa chỉ",
        street: "123 Đường ABC, Quận XYZ",
        city: "Hà Nội, Việt Nam"
    },
    workingHours: {
        title: "Giờ làm việc",
        weekdays: "Thứ 2 - Thứ 6: 9:00 - 18:00",
        weekend: "Thứ 7: 9:00 - 17:00",
        closed: "Chủ nhật: Nghỉ"
    }
}

export const contactSections = [
  {
    id: 1,
    icon: "/image/contactPage/email.svg",
    title: contactInfo.email.title,
    content: [contactInfo.email.primary, contactInfo.email.secondary],
  },
  {
    id: 2,
    icon: "/image/contactPage/phone.svg",
    title: contactInfo.phone.title,
    content: [contactInfo.phone.hotline, contactInfo.phone.office],
  },
  {
    id: 3,
    icon: "/image/contactPage/location.svg",
    title: contactInfo.address.title,
    content: [contactInfo.address.street, contactInfo.address.city],
  },
  {
    id: 4,
    icon: "/image/contactPage/clock.svg",
    title: contactInfo.workingHours.title,
    content: [
      contactInfo.workingHours.weekdays,
      contactInfo.workingHours.weekend,
      contactInfo.workingHours.closed,
    ],
  },
];
