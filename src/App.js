import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigation />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'shop',
        element: <div>I am shop</div>
      },
      {
        path: 'auth',
        element: <Authentication />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
