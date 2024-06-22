import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllUsers = () => {
  const allUser = useLoaderData();
  console.log(allUser);

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
            {allUser.map((user, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className='btn btn-sm btn-primary'>Admin</button>
                </td>
                <td>{user.person}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
