import { useState } from 'react'
import { Input, TextArea } from '../../ui/Input'
import { Button } from '../../ui/Button'

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(' Form Data:', formData)
    alert('Tin nhắn đã được gửi!')

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Gửi tin nhắn cho chúng tôi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Họ và tên"
          name="name"
          placeholder="Nhập họ tên của bạn"
          required={true}
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@email.com"
          required={true}
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Số điện thoại"
        name="phone"
        type="tel"
        placeholder="Số điện thoại của bạn"
        value={formData.phone}
        onChange={handleChange}
      />

      <Input
        label="Chủ đề"
        name="subject"
        placeholder="Tiêu đề tin nhắn"
        required={true}
        value={formData.subject}
        onChange={handleChange}
      />

      <TextArea
        label="Nội dung"
        name="message"
        placeholder="Nhập nội dung tin nhắn của bạn..."
        required={true}
        value={formData.message}
        onChange={handleChange}
        rows={6}
      />

      <Button type="submit" name="Gửi tin nhắn" fullWidth={true} />

      {/* <p className="text-sm text-gray-500 text-center">
                Chúng tôi tôn trọng quyền riêng tư của bạn và sẽ không chia sẻ thông tin của bạn với bên thứ ba.
            </p> */}
    </form>
  )
}
