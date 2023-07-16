import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home/home.component'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App
