import Header from './Header'
import Footer from './Footer'
export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header cố định */}
      <Header />

      {/* Nội dung chính */}
      <main className="flex-1 pt-[65px]">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
