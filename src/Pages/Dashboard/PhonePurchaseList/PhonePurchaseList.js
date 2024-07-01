import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import { Link } from 'react-router-dom';

const PhonePurchaseList = () => {
  const { user } = useContext(GlobalContext);
  const [phoneBookingList, setPhoneBookingList] = useState([]);

  useEffect(() => {
    fetch(`https://rephonex-server.vercel.app/meetings?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setPhoneBookingList(data));
  }, [user?.email, setPhoneBookingList]);

  console.log(phoneBookingList);

  return (
    <div className='mx-8 mt-8'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Phone Name</th>
              <th>Meeting Date</th>
              <th>Meeting Location</th>
            </tr>
          </thead>
          <tbody>
            {phoneBookingList.map((booking, index) => (
              <tr>
                <th>{index + 1}</th>
                <Link to={`/details/${booking.phone_id}`}>
                  <td>{booking.phone_name}</td>
                </Link>
                <td>{booking.meeting_date}</td>
                <td>{booking.meeting_location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PhonePurchaseList;
