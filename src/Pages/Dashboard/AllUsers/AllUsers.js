import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import toast, { Toaster } from 'react-hot-toast';

const AllUsers = () => {
  const allUser = useLoaderData();
  const { validUser } = useContext(GlobalContext);

  console.log(allUser);
  console.log(validUser);

  const handleMakeAdmin = (id) => {
    console.log(id);
    fetch(`https://rephonex-server.vercel.app/users/admin/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      //   body: JSON.stringify(id),
      //   body: JSON.stringify({ email: user?.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success('Make admin Successfully');
          //   refetch();
        }
      });
  };

  return (
    <div className='mx-8'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th></th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <Toaster />
            {allUser.map((users, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{users.name}</td>
                <td>{users.email}</td>
                <td>
                  {users?.role !== 'admin' && (
                    <button
                      onClick={() => handleMakeAdmin(users._id)}
                      className='btn btn-primary btn-xs'
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>{users.person}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
