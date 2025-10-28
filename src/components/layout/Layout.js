import Header from './Header'
import Footer from './Footer'
import ChatWidget from '../AIChat/ChatWidget'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[60px] bg-white">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
