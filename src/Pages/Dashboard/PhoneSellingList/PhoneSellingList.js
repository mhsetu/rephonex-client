import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import { List } from '@mui/material';
import { Link } from 'react-router-dom';

const PhoneSellingList = () => {
  const [phones, setPhones] = useState([]);
  const { user } = useContext(GlobalContext);
  

  useEffect(() => {
    fetch(`http://localhost:5000/phone?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, [user?.email]);

  console.log(phones);

  return (
    <div className='mx-8 my-8'>
      <h2 className='text-center text-4xl font-semibold my-3'>
        Phones On Sale
      </h2>

      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Phone Name</th>
              <th>Expected Price</th>
              <th>Post Date</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phone, index) => (
              <tr>
                <th>{index + 1}</th>
                <Link to={`/details/${phone._id}`}><td>{phone.phone_name}</td></Link>
                <td>{phone.resale_price}</td>
                <td>{phone.posted_date}</td>
              </tr>
            ))}
            {/* {phones.map((phone, index) => (
              <List index={index} key={phone._id} phone={phone}></List>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhoneSellingList;
