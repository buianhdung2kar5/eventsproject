import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import MainRoutes from './routes/MainRoutes'
const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  )
}

export default App
