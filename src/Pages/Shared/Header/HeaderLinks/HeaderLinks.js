import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HeaderLinks = () => {
  // const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    fetch(`https://rephonex-server.onrender.com/category`)
      .then((res) => res.json())
      .then((data) => setMenuItems(data));
  }, [menuItems]);
  //   console.log(menuItems);

  return (
    <div>
      <div className='dropdown dropdown-hover dropdown-end'>
        <div tabIndex={0} role='button' className='btn m-1'>
          Category
        </div>
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-md shadow-md w-52'
        >
          {menuItems.map((items) => (
            <li key={items._id}>
              <Link to={`/category/${items._id}`}>{items.category_name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HeaderLinks;
