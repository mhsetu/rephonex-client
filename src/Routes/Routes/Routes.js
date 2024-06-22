import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import Home from '../../Pages/Home/Home/Home';
import PhoneDetails from '../../Pages/Home/Phones/PhoneDetails';
import Categories from '../../Pages/Category/Categories/Categories';
import Signup from '../../Pages/Signup/Signup/Signup';
import Login from '../../Pages/Login/Login';
import DashboardLayout from '../../Layout/DashboardLayout';
import PhoneSellingList from '../../Pages/Dashboard/PhoneSellingList/PhoneSellingList';
import PhonePurchaseList from '../../Pages/Dashboard/PhonePurchaseList/PhonePurchaseList';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';

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
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
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
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/allPages',
        element: <Dashboard></Dashboard>,
      },
      {
        path: '/dashboard/allUser',
        element: <AllUsers></AllUsers>,
        loader: () => fetch(`http://localhost:5000/users`),
      },
      {
        path: '/dashboard/phonesOnSale',
        element: <PhoneSellingList></PhoneSellingList>,
      },
      {
        path: '/dashboard/phonePurchaseList',
        element: <PhonePurchaseList></PhonePurchaseList>,
      },
    ],
  },
]);
