import React, { useState, useRef, useEffect } from 'react'
import { dataEvents } from '../../data/events/events'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Xin chào! Bạn có thể hỏi tôi về các sự kiện!  ' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  const searchEvents = (question) => {
    const query = question.toLowerCase()
    return dataEvents.filter((e) => {
      const eventData = `${e.name} ${e.category} ${e.address} ${e.organization}`.toLowerCase()
      return eventData.includes(query)
    }).slice(0, 5) 
  }

  const generateDemoReply = (question) => {
    const matchedEvents = searchEvents(question)
    if (matchedEvents.length === 0) {
      return `Không tìm thấy sự kiện nào phù hợp với yêu cầu của bạn. Bạn có thể hỏi về các thể loại khác như workshop, seminar, hoặc chỉ rõ địa điểm/ngày mong muốn.(Ví dụ: Hà Nội, Công nghệ,....)`
    }
    const eventList = matchedEvents
      .map((e) => `- ${e.name} (${e.date}, ${e.address}), giá: ${e.price}, đã đăng ký: ${e.memberResgiter}/${e.slots}`)
      .join('\n')
    return `Kết quả:\n${eventList}\n\nNhững sự kiện trên có thể phù hợp với yêu cầu của bạn. Bạn muốn biết thêm chi tiết về sự kiện nào?`
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text) return
    const now = new Date()
    const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setMessages((m) => [...m, { from: 'user', text, time: timeStr }])
    setInput('')
    setLoading(true)

    try {
      const reply = generateDemoReply(text)
      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setMessages((m) => [...m, { from: 'bot', text: reply, time: botTime }])
    } catch (err) {
      console.error('AI request error', err)
      const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setMessages((m) => [...m, { from: 'bot', text: 'Lỗi kết nối tới dịch vụ AI. Vui lòng thử lại sau.', time: botTime }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {!open && (
        <button
          aria-label="Open assistant"
          onClick={() => setOpen(true)}
          className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-500 shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105"
        >
          <span className="text-2xl">💬</span>
        </button>
      )}

      {open && (
        <div className="mt-3 w-[380px] h-[520px] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transform transition-all duration-200">
            <div className="px-4 py-3 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="font-medium text-sm">Trợ lý sự kiện</div>
              </div>
              <div className="flex items-center gap-2">
                <button aria-label="Close" onClick={() => setOpen(false)} className="text-white text-2xl leading-none">×</button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-3" style={{ scrollbarGutter: 'stable' }}>
              {messages.map((m, i) => (
                <div key={i} className={`flex items-end ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {m.from === 'bot' && (
                    <div className="mr-2 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-200">
                        <span className="text-sm">🤖</span>
                      </div>
                    </div>
                  )}

                  <div className={`rounded-lg px-3 py-2 max-w-[78%] whitespace-pre-wrap break-words ${m.from === 'user' ? 'bg-indigo-600 text-white' : 'bg-white text-slate-800 border border-slate-200'}`}>
                    <div className="text-sm">{m.text}</div>
                    <div className="text-[10px] text-slate-400 mt-1 text-right">{m.time || ''}</div>
                  </div>

                  {m.from === 'user' && (
                    <div className="ml-2 flex-shrink-0">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">U</div>
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
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSend() }}
                  placeholder="Hỏi về sự kiện..."
                  className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                  disabled={loading}
                />
                <button
                  onClick={handleSend}
                  disabled={loading}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm disabled:opacity-60 flex items-center gap-2"
                >
                  {loading ? '...' : (
                    <>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
