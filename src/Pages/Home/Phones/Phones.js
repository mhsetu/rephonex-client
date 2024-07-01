import React, { useContext, useEffect } from 'react';
import PhonesCard from './PhonesCard';
import { GlobalContext } from '../../../Context Provider/ContextProvider';

const Phones = () => {
  const { phones, setPhones } = useContext(GlobalContext);
  //   console.log(phones);

  useEffect(() => {
    fetch('https://rephonex-server.vercel.app/phones')
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
      });
  }, [phones, setPhones]);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-3 md:gap-2 place-items-center'>
      {phones.map((phone) => (
        <PhonesCard key={phone._id} phone={phone}></PhonesCard>
      ))}
    </div>
  );
};

export default Phones;
