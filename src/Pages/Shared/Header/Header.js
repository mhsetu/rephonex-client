import React, { useContext } from 'react';
import logo from '../../../assets/logos.png';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../Context Provider/ContextProvider';

const Header = () => {
  const { Logout, user } = useContext(GlobalContext);

  const menu = (
    <>
      <Link to='/'>
        <button className='btn btn-ghost'>Home</button>
      </Link>
    </>
  );

  const withoutUserMenu = (
    <>
      <Link to='/'>
        <button className='btn btn-ghost'>Home</button>
      </Link>
      <HeaderLinks></HeaderLinks>
      <Link to='/login'>
        <button className='btn btn-ghost'>Login</button>
      </Link>
      <Link to='/signup'>
        <button className='btn btn-ghost'>Signup</button>
      </Link>
    </>
  );

  const handleLogout = () => {
    Logout()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='mx-8 mt-8'>
      <div className='navbar bg-base-100 shadow-md'>
        <div>
          <img className='h-16 mx-3' src={logo} alt='' />
        </div>
        <div className='flex-1'>
          <Link to='/'>
            <button className='btn btn-ghost text-xl'>RePhoneX</button>
          </Link>
        </div>
        <div className='flex-none'>
          <div
            className={`${user?.uid ? 'flex place-items-center' : 'hidden'}`}
          >
            {menu}
            {/* <Link to='/dashboard/phonesOnSale'>
              <button className='btn btn-ghost'>On Sale</button>
            </Link>
            <Link to='/dashboard/phonePurchaseList'>
              <button className='btn btn-ghost'>Purchases</button>
            </Link> */}
            <Link to='/dashboard'>
              <button className='btn btn-ghost'>Dashboard</button>
            </Link>
            <div>
              <HeaderLinks></HeaderLinks>
            </div>
          </div>
          {user?.uid ? (
            <div>
              {user.photoURL ? (
                <div>
                  <div className='dropdown dropdown-end mr-2'>
                    <div
                      tabIndex={0}
                      role='button'
                      className='btn btn-ghost btn-circle avatar'
                    >
                      <div className='w-10 rounded-full'>
                        <img
                          alt='Tailwind CSS Navbar component'
                          src={user.photoURL}
                        />
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                    >
                      <li>
                        <p className='justify-between text-[#9d4edd] font-semibold'>
                          {user.displayName}
                          <span className='badge'>New</span>
                        </p>
                      </li>
                      <li>
                        <Link to='/UserSettings'>
                          <p>Settings</p>
                        </Link>
                      </li>
                      <li>
                        <p onClick={handleLogout}>Logout</p>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className='dropdown dropdown-end mr-2'>
                  <div
                    tabIndex={0}
                    role='button'
                    className='btn btn-ghost btn-circle avatar'
                  >
                    <div className='avatar placeholder'>
                      <div className='bg-neutral text-neutral-content rounded-full w-10'>
                        <span>
                          {user?.displayName?.slice(0, 1).toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
                  >
                    <li>
                      <p className='justify-between text-[#9d4edd] font-semibold'>
                        {user.displayName}
                        <span className='badge'>New</span>
                      </p>
                    </li>
                    <li>
                      <Link to='/UserSettings'>
                        <p>Settings</p>
                      </Link>
                    </li>
                    <li>
                      <p onClick={handleLogout}>Logout</p>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className='hidden lg:inline-block md:inline-block'>
              <div className='flex place-items-center'>{withoutUserMenu}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
