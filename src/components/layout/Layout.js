import Header from './Header'
import Footer from './Footer'
import ChatWidget from '../AIChat/ChatWidget'
import SideBar from '../../organization/layout/SideBar'
export default function Layout({ children }) {
  const user = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : {}
  const isOganization = user.role === 'organization'
  return (
    <>
      {!isOganization ? (
        <div className="min-h-screen flex flex-col gap-14">
          <Header />
          <main className="bg-[#f5f5f5] flex-1">{children}</main>
          <Footer />
          <ChatWidget />
        </div>
      ) : (
        <div className="min-h-screen flex bg-white">
          <div className="w-2xl">
            <SideBar />
          </div>
          <div className="flex-1">
            <main className="flex-1 bg-white w-[90%] mx-auto mt-[12px]">
              {children}
            </main>
          </div>
          <ChatWidget />
        </div>
      )}
    </>
  )
}
