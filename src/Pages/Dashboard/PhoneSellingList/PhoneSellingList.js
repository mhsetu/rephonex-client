import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

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

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/phones/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success('Delete Successfully');
        }
      });
  };

  return (
    <div className='mx-8 my-8'>
      <Toaster position='top-right' reverseOrder={false} />
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Phone Name</th>
              <th>Expected Price</th>
              <th>Post Date</th>
            </tr>
          </thead>
          <tbody>
            {phones.map((phone, index) => (
              <tr>
                <th>
                  <button
                    onClick={() => handleDeleteProduct(phone._id)}
                    className='btn btn-xs btn-error'
                  >
                    Delete
                  </button>
                </th>
                <th>{index + 1}</th>
                <Link to={`/details/${phone._id}`}>
                  <td>{phone.phone_name}</td>
                </Link>
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
