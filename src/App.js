import { HashRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainRoutes from './routes/MainRoutes'
import ScrollToTop from './utils/ScrollToTop'
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <ScrollToTop />
          <MainRoutes />
        </HashRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
