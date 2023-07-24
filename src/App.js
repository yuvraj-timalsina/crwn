import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Shop from './routes/shop/shop.component';

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
        element: <Shop />
      },
      {
        path: 'auth',
        element: <Authentication />
      },
      {
        path: 'checkout',
        element: <Checkout />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
