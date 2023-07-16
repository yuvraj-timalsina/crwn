import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import SignIn from './routes/sign-in/sign-in.component'
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
        path: 'shop',
        element: <div>I am shop</div>,
      },
      {
        path: 'sign-in',
        element: <SignIn />,
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
