import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, [menuItems]);
  //   console.log(menuItems);

  return (
    <div>
      <div className='relative inline-block text-left dropdown-end'>
        <div>
          <button
            onClick={() => setOpen(!open)}
            type='button'
            className='btn btn-ghost'
            // id='menu-button'
            // aria-expanded='true'
            // aria-haspopup='true'
          >
            Options
            {/* <svg
              className='-mr-1 h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'
            >
              <path
                fill-rule='evenodd'
                d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                clip-rule='evenodd'
              />
            </svg> */}
          </button>
        </div>

        {/* <!--
    Dropdown menu, show/hide based on menu state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  --> */}
        <div
          className={`${
            open
              ? 'absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
              : 'hidden'
          }`}
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
        >
          <div className='py-1' role='none'>
            {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
            {menuItems.map((item) => (
              <Link
                to={`/category/${item._id}`}
                key={item._id}
                className='block px-4 py-2 text-sm text-gray-700'
                role='menuitem'
                id='menu-item-0'
              >
                {item.category_name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderLinks;
