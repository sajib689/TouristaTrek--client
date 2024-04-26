
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto font-nunita'>
    <AuthProvider>
    <RouterProvider router={router}>
      <Toaster/>
    </RouterProvider>
    </AuthProvider>
  </div>,
)
