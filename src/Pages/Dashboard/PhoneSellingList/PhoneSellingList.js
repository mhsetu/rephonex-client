import { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const PhoneSellingList = () => {
  const { user, cellPhones, setCellPhones } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://rephonex-server.onrender.com/phone?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setCellPhones(data));
  }, [user?.email, setCellPhones]);

  console.log(cellPhones);

  const handleDeleteProduct = (id) => {
    fetch(`https://rephonex-server.onrender.com/phones/${id}`, {
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
    fetch(`https://rephonex-server.onrender.com/advertises/${id}`, {
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
            {cellPhones.map((phone, index) => (
              <tr key={phone._id}>
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
