import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import Booking from './Booking/Booking';
import useCustomer from '../../../hooks/useCustomer';
import useSales from '../../../hooks/useSales';
import { Toaster } from 'react-hot-toast';

const PhoneDetails = () => {
  const { user, handleAdvertise, setBookingId } = useContext(GlobalContext);
  const [phones, setPhones] = useState([]);
  // console.log(validUser);
  // console.log(phoneBookingList);
  const [isCustomer] = useCustomer(user?.email);
  const [isSale] = useSales(user?.email);
  const {
    ram,
    camera,
    _id,
    brand,
    location,
    original_price,
    phone_name,
    phone_description,
    picture,
    resale_price,
    seller_name,
    usage_duration,
  } = useLoaderData();

  // console.log(cellPhones);
  useEffect(() => {
    fetch(`https://rephonex-server.vercel.app/phone?email=${user?.email}`, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, [user?.email, setPhones]);

  // const phone = cellPhones.map((phone) => phone.email === user?.email);
  // console.log(phones);
  return (
    <div>
      <div className='bg-white mt-5'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8'>
          <div>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Phone Specifications
            </h2>
            <p className='mt-4 text-gray-500'>{phone_description}</p>

            <div className='mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8'>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>{brand}</p>
                <p className='mt-2 text-sm text-gray-500'>
                  Original Price:{' '}
                  <span className='font-semibold'> ${original_price}</span>
                </p>
                <p className='mt-2 text-sm text-gray-500'>
                  ResalePrice:{' '}
                  <span className='font-semibold'> ${resale_price}</span>
                </p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Phone Model</p>
                <p className='mt-2 text-sm text-gray-500'>{phone_name}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Seller Name</p>
                <p className='mt-2 text-sm text-gray-500'>{seller_name}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Camera & RAM</p>
                <p className='mt-2 text-sm text-gray-500'>Ram: {ram}</p>
                <p className='mt-2 text-sm text-gray-500'>Camera: {camera}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>
                  Phone Usage Duration{' '}
                </p>
                <p className='mt-2 text-sm text-gray-500'>{usage_duration}</p>
              </div>
              <div className='border-t border-gray-200 pt-4'>
                <p className='font-medium text-gray-900'>Location of owner </p>
                <p className='mt-2 text-sm text-gray-500'>{location}</p>
              </div>
            </div>

            {isCustomer && (
              <label
                htmlFor='booking'
                className='btn btn-primary lg:inline-flex md:inline-flex hidden mt-8 px-12'
              >
                Book Now
              </label>
            )}
            {isCustomer && (
              <Link to='/bookingForm'>
                <button
                  onClick={() => setBookingId({ _id, phone_name })}
                  className='btn btn-primary inline-flex md:hidden lg:hidden mt-8 px-12'
                >
                  Book Now
                </button>
              </Link>
            )}
            {isSale &&
              phones.map(
                (phone) =>
                  phone?._id === _id && (
                    <button
                      key={phone._id}
                      onClick={() => handleAdvertise(_id)}
                      className='btn btn-primary mt-8 px-12'
                    >
                      Advertise
                    </button>
                  )
              )}
          </div>
          <Toaster position='top-right' reverseOrder={false} />
          <div>
            <img src={picture} alt='' className='rounded-lg bg-gray-100' />
          </div>
        </div>
      </div>
      <Booking id={_id} phone_name={phone_name}></Booking>
    </div>
  );
};

export default PhoneDetails;
