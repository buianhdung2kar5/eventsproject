export const BasicInfoSection = ({ dataUser }) => {
  const { username, role, event } = dataUser

  return (
    <section className="section-container border-b pb-8 mb-8">
      <h2 className="text-base font-semibold text-gray-700 mb-4">
        Thông tin cơ bản
      </h2>

      <div className="form-group mb-4">
        <label className="block mb-1 font-medium">Tên hồ sơ </label>
        <input
          type="text"
          value={`${username} - ${event}`}
          className="input-text w-full p-2 border rounded"
        />
      </div>

      <div className="form-group mb-4">
        <label className="block mb-1 font-medium">Mô tả</label>
        <textarea
          placeholder="Mô tả ngắn về hồ sơ này..."
          className="textarea w-full p-2 border rounded"
          rows="1"
        ></textarea>
      </div>

      <div className="form-group">
        <label className="block mb-1 font-medium">Ngôn ngữ</label>
        {/* Component Dropdown giả lập */}
        <div className="dropdown border p-2 rounded flex justify-between items-center">
          Tiếng Việt <span className="arrow-down">▼</span>
        </div>
      </div>
    </section>
  )
}
