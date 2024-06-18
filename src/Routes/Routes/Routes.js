import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import PhoneDetails from '../../Pages/Home/Phones/PhoneDetails';
import Categories from '../../Pages/Category/Categories/Categories';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/details/:id',
        element: <PhoneDetails></PhoneDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/phones/${params.id}`),
      },
      {
        path: '/category/:id',
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
]);
