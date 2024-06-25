import React, { useContext } from 'react';
import Header from '../Pages/Shared/Header/Header';
import Dashboard from '../Pages/Dashboard/PhoneSellingList/PhoneSellingList';
import { Link, Outlet } from 'react-router-dom';
import { GlobalContext } from '../Context Provider/ContextProvider';
import useAdmin from '../hooks/useAdmin';
import useSales from '../hooks/useSales';
import useCustomer from '../hooks/useCustomer';

const DashboardLayout = () => {
  const { user } = useContext(GlobalContext);
  console.log(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  const [isSale] = useSales(user?.email);
  const [isCustomer] = useCustomer(user?.email);
  console.log(isAdmin);
  return (
    <div>
      <Header></Header>
      <div className='drawer lg:drawer-open'>
        <input
          id='dashboard-drawer'
          type='checkbox'
          className='drawer-toggle'
        />
        <div className='drawer-content '>
          {/* Page content here */}
          <Outlet></Outlet>
          {/* <label
            htmlFor='dashboard-drawer'
            className='btn btn-primary drawer-button lg:hidden'
          >
            Open drawer
          </label> */}
        </div>
        <div className='drawer-side'>
          <label
            htmlFor='dashboard-drawer'
            aria-label='close sidebar'
            className='drawer-overlay'
          ></label>
          <ul className='menu mx-8 p-4 w-80 min-h-full bg-base-200 text-base-content'>
            {/* Sidebar content here */}
            {isSale && (
              <li className='mb-2'>
                <Link to='/dashboard/phonesOnSale'>On Sale</Link>
              </li>
            )}
            {isCustomer && (
              <li className='mb-2'>
                <Link to='/dashboard/phonePurchaseList'>
                  Phone Purchase List
                </Link>
              </li>
            )}

            {/* <li>
              <Link to='/dashboard/allUser'>Users</Link>
            </li> */}
            {isAdmin && (
              <li>
                <Link to='/dashboard/allUser'>Users</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
