import React, { useState } from 'react';

const CustomerSignupFrom = () => {
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.value;
    console.log(name, email, password, image);
  };

  return (
    <div className='mx-8'>
      <form onSubmit={handleSubmit}>
        <div className='space-y-5'>
          <div className='mt-10'>
            <div className='form-control w-24'>
              <label className='label cursor-pointer'>
                <input
                  type='radio'
                  name='radio-1'
                  className='radio checked:bg-blue-500 '
                  checked
                />
                <span className='label-text'>Seller</span>
              </label>
            </div>
            <div className='form-control w-24'>
              <label className='label cursor-pointer'>
                <input
                  type='radio'
                  name='radio-1'
                  className='radio checked:bg-blue-500'
                  checked
                />
                <span className='label-text'>Customer</span>
              </label>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <div className='mt-3 from-control'>
              <div>
                <label
                  for='first-name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Name
                </label>
                <div className='mt-2'>
                  <input
                    name='name'
                    type='text'
                    placeholder='Your Name'
                    className='input input-bordered w-1/2 mb-8 '
                  />
                </div>
              </div>
              <div>
                <label
                  for='first-name'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Photo
                </label>
                <div className='mt-2'>
                  <input
                    name='image'
                    type='text'
                    placeholder='Your Photo URL'
                    className='input input-bordered w-1/2 mb-8 '
                  />
                </div>
              </div>

              <div className='mt-3'>
                <label
                  for='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    name='email'
                    type='email'
                    placeholder='Your Email'
                    className='input input-bordered w-1/2 mb-8 '
                  />
                </div>
              </div>
              <div className='mt-3'>
                <label
                  for='email'
                  className='block text-sm font-medium leading-6 text-gray-900'
                >
                  Password
                </label>
                <div className='mt-2'>
                  <input
                    name='password'
                    type='password'
                    placeholder='Your Password'
                    className='input input-bordered w-1/2 mb-8 '
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='my-6'>
          <input type='submit' className='btn btn-primary' />
        </div>
      </form>
    </div>
  );
};

export default CustomerSignupFrom;
