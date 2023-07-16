import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/shop',
        element: <div>I am shop</div>,
      }
    ]
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default App
