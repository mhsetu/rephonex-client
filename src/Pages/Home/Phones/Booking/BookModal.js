import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../../../Context Provider/ContextProvider';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BookModal = ({ id, phone_name }) => {
  const { user } = useContext(GlobalContext);

  const [value, setValue] = useState(dayjs(new Date()));

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const phone = form.phone.value;
    const name = form.name.value;
    const location = form.location.value;
    const date = form.date.value;
    const message = form.message.value;

    const customerInfo = {
      phone_name,
      phone_id: id,
      customer_name: name,
      phone_number: phone,
      meeting_location: location,
      meeting_date: date,
      email,
      message,
    };
    console.log(customerInfo);
    fetch(`https://rephonex-server.vercel.app/meeting`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(customerInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      });
  };
  return (
    <div>
      <div className='  px-6 py-24 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Meeting & Personal Details
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='name'
                  defaultValue={user?.displayName}
                  readOnly
                  placeholder='Your Full Name'
                  autoComplete='given-name'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Phone Number
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='phone'
                  placeholder='Your Phone Number'
                  autoComplete='family-name'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Meeting Location
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  type='text'
                  name='location'
                  placeholder='Meeting Place'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  defaultValue={user?.email}
                  readOnly
                  placeholder='Your Email'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Phone Name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='model'
                  readOnly
                  defaultValue={phone_name}
                  placeholder='Phone Model Name'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Meeting
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker']}>
                  <DatePicker
                    name='date'
                    label='Meeting date'
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className='sm:col-span-2'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Message
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='message'
                  placeholder='Please leave a message'
                  rows='4'
                  className='block textarea textarea-bordered textarea-lg w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6'
                ></textarea>
              </div>
            </div>
          </div>
          <div className=' mt-10'>
            <input
              type='submit'
              value='Submit'
              className='btn block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookModal;
