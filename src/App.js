import { HashRouter } from 'react-router-dom' // 1. Đổi import
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainRoutes from './routes/MainRoutes'
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* 2. Đổi component và bỏ prop 'basename' */}
        <HashRouter> 
          <MainRoutes />
        </HashRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App