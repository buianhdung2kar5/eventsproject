import React, { useState, useRef, useEffect } from 'react'
import { dataEvents } from '../../data/events/events'
import Fuse from 'fuse.js' // 1. Dùng Fuse.js
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../routes/path'
// 2. Cấu hình Fuse để tìm kiếm "mờ" và "không quan tâm vị trí"
const fuseOptions = {
  keys: ['name', 'category', 'address', 'organization', 'description'], // Thêm 'description' nếu có
  includeScore: true,
  threshold: 0.6, // Tăng độ "mờ"
  ignoreLocation: true, // Không quan tâm vị trí (Hà Nội vs. sự kiện ở Hà Nội)
}
const fuse = new Fuse(dataEvents, fuseOptions)

// 3. "Lớp cảm xúc" (Giả AI)
// Chúng ta tạo các câu trả lời mẫu cho "Sóc Nhỏ"
const personaReplies = {
  greeting: 'Ooh, Sóc Nhỏ chào bạn! Bạn muốn tìm sự kiện gì nè? 🐿️',
  noResult:
    "Ui, Sóc Nhỏ tìm hông thấy sự kiện nào giống vậy rùi. Bạn thử gõ (ví dụ: 'Hà Nội', 'Công nghệ') xem sao nha!",
  foundPrefix: 'Aha! Sóc Nhỏ tìm thấy một vài sự kiện hay ho dành cho bạn nè:',
  foundSuffix: 'Bạn có muốn Sóc Nhỏ kể chi tiết hơn về sự kiện nào không?',
  error: 'Ôi, Sóc Nhỏ bị lỗi gì đó mất rùi... Bạn F5 lại thử xem T.T',
}

export default function ChatWidget() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    // Bot tự chào bằng "cảm xúc"
    { from: 'bot', text: personaReplies.greeting },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  // 4. Hàm tìm kiếm thông minh (dùng Fuse)
  const searchEvents = (question) => {
    const query = question.toLowerCase()
    const results = fuse.search(query)
    const matchedEvents = results.slice(0, 3).map((result) => result.item) // Chỉ lấy 3 kết quả
    return matchedEvents
  }

  // 5. Hàm tạo câu trả lời (Gộp data + cảm xúc)
  // 5. Hàm tạo câu trả lời (TRẢ VỀ OBJECT, KHÔNG TRẢ VỀ STRING)
  const generateReply = (question) => {
    const matchedEvents = searchEvents(question)

    // Nếu không tìm thấy
    if (matchedEvents.length === 0) {
      // Trả về object đơn giản
      return { text: personaReplies.noResult }
    }

    // Nếu tìm thấy
    // Trả về một object phức tạp chứa cả text và mảng data
    return {
      text: personaReplies.foundPrefix, // Lời mở đầu
      events: matchedEvents, // MẢNG DỮ LIỆU SỰ KIỆN
      suffix: personaReplies.foundSuffix, // Lời kết
    }
  }
  // 6. Hàm gửi tin nhắn (Không cần API)
  const handleSend = async () => {
    // ... (phần code lấy text, time, setLoading giữ nguyên) ...
    const text = input.trim()
    if (!text) return
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    })
    setMessages((m) => [...m, { from: 'user', text, time: timeStr }])
    setInput('')
    setLoading(true)

    // Giả vờ bot đang "suy nghĩ"
    setTimeout(() => {
      try {
        const replyObject = generateReply(text) // 1. Giờ đây là một object
        const botTime = new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })

        // 2. Dùng ES6 spread (...) để gộp object lại
        setMessages((m) => [
          ...m,
          {
            from: 'bot',
            time: botTime,
            ...replyObject, // <-- Gộp {text: ..., events: ..., suffix: ...} vào đây
          },
        ])
      } catch (err) {
        // ... (phần catch lỗi giữ nguyên) ...
      } finally {
        setLoading(false)
      }
    }, 600)
  }
  console.log('messages', messages)

  // Phần giao diện (JSX) giữ nguyên, không cần thay đổi
  return (
    <div className="fixed right-5 bottom-5 z-50">
      {/* ... Toàn bộ JSX của bạn ... */}
      {!open && (
        <button
          aria-label="Open assistant"
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105"
        >
          <span className="text-2xl p-2">
            <img src={process.env.PUBLIC_URL + '/image/AI/aiAvartar.png'} />
          </span>
        </button>
      )}

      {open && (
        <div className="mt-3 w-[380px] h-[520px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-200">
          <div
            className="px-4 py-3 bg-[#71AAF1]
 text-white flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8  flex items-center justify-center overflow-hidden">
                <span className="text-lg">
                  <img
                    src={process.env.PUBLIC_URL + '/image/AI/aiAvartar.png'}
                  />
                </span>
              </div>
              <div className="font-medium text-sm">Trợ lý sự kiện</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="text-white text-2xl leading-none"
              >
                ×
              </button>
            </div>
          </div>

          <div
            className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-3"
            style={{ scrollbarGutter: 'stable' }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex items-end ${
                  m.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.from === 'bot' && (
                  <div className="mr-2 flex-shrink-0">
                    <div className="w-8 h-8 flex items-center justify-center border-slate-200">
                      <span className="text-sm">
                        <img
                          src={
                            process.env.PUBLIC_URL + '/image/AI/aiAvartar.png'
                          }
                        />
                      </span>
                    </div>
                  </div>
                )}

                <div
                  className={`rounded-lg px-3 py-2 max-w-[78%] whitespace-pre-wrap break-words ${
                    m.from === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-slate-800 border border-slate-200'
                  }`}
                >
                  {m.form === 'user' ? (
                    <div className="text-sm">{m.text}</div>
                  ) : !m.events ? (
                    <div className="text-sm">{m.text}</div>
                  ) : (
                    <div className="text-sm">
                      <div className="mb-2">{m.text}</div>
                      {m?.events?.map((e) => (
                        <div key={e.id} className="mb-3">
                          <img
                            onClick={() => navigate(`${PATH.EVENTS}/${e.id}`)}
                            className="border rounded-lg cursor-pointer"
                            src={process.env.PUBLIC_URL + `${e.img}`}
                          />
                          <div>
                            <div className="font-semibold">{e.name}</div>
                            <div className="text-[13px] text-slate-600">
                              {e.date} | {e.address}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-[10px] text-slate-400 mt-1 text-right">
                    {m.time || ''}
                  </div>
                </div>

                {m.from === 'user' && (
                  <div className="ml-2 flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      U
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSend()
                }}
                placeholder="Hỏi về sự kiện..."
                className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                disabled={loading}
              />
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-[#71AAF1] text-white px-4 py-2 rounded-md text-sm disabled:opacity-60 flex items-center gap-2"
              >
                {loading ? (
                  '...'
                ) : (
                  <>
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 2L11 13"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Gửi
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
