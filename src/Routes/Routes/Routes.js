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

import AllUsers from '../../Pages/Dashboard/AllUsers/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';

import Blogs from '../../Pages/Blogs/Blogs';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MobilePostForm from '../../Pages/Home/Post/MobilePostForm';
import BookingForm from '../../Pages/Home/Phones/Booking/BookingForm';

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
        path: '/mobileForm',
        element: <MobilePostForm></MobilePostForm>,
      },
      {
        path: '/bookingForm',
        element: <BookingForm></BookingForm>,
      },
      {
        path: '/blogs',
        element: (
          <PrivateRoute>
            <Blogs></Blogs>
          </PrivateRoute>
        ),
      },
      {
        path: '/details/:id',
        element: <PhoneDetails></PhoneDetails>,
        loader: ({ params }) =>
          fetch(`https://rephonex-server.vercel.app/phones/${params.id}`),
      },
      {
        path: '/category/:id',
        element: <Categories></Categories>,
        loader: ({ params }) =>
          fetch(`https://rephonex-server.vercel.app/category/${params.id}`),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: '/dashboard/allUser',
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
        loader: () => fetch(`https://rephonex-server.vercel.app/users`),
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
