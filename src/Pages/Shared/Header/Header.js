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
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-5 h-5 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <div>
          <img className='h-16 mx-3' src={logo} alt='' />
        </div>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>RePhoneX</a>
        </div>
        <div className='flex-none'>
          <div
            className={`${user?.uid ? 'flex place-items-center' : 'hidden'}`}
          >
            {menu}
            <div>
              <HeaderLinks></HeaderLinks>
            </div>
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle'
              >
                <div className='indicator'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                    />
                  </svg>
                  <span className='badge badge-sm indicator-item'>8</span>
                </div>
              </div>

              {/* <div
              tabIndex={0}
              className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>8 Items</span>
                <span className='text-info'>Subtotal: $999</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    View cart
                  </button>
                </div>
              </div>
            </div> */}
            </div>
          </div>

          {/* shopping cart and profile img */}

          {/* <div className='dropdown dropdown-end mr-5'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}

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
