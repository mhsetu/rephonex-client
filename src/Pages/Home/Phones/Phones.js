import React, { useContext, useEffect } from 'react';
import PhonesCard from './PhonesCard';
import { GlobalContext } from '../../../Context Provider/ContextProvider';

const Phones = () => {
  const { phones, setPhones } = useContext(GlobalContext);
  //   console.log(phones);

  useEffect(() => {
    fetch(`https://rephonex-server.onrender.com/phones`)
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
      });
  }, [phones, setPhones]);
  return (
    <div className='grid grid-cols-3 gap-3'>
      {phones.map((phone) => (
        <PhonesCard key={phone._id} phone={phone}></PhonesCard>
      ))}
    </div>
  );
};

export default Phones;
