import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';
import { GlobalContext } from '../../../Context Provider/ContextProvider';
import PhonesCard from '../../Home/Phones/PhonesCard';

const Categories = () => {
  const category = useLoaderData();
  const [phones, setPhones] = useState([]);
  // const { phones } = useContext(GlobalContext);
  // console.log(phones);
  // console.log(category);
  useEffect(() => {
    fetch(`http://localhost:5000/phones`)
      .then((res) => res.json())
      .then((data) => {
        setPhones(data);
      });
  }, [phones]);

  const filterCategory = phones.filter(
    (phone) => phone.category_id === category.category_id
  );

  // console.log(findCategory);
  // const phone = useContext(phoneContext);
  // console.log(phone);
  // console.log(item);

  return (
    <div className='grid grid-cols-3 place-items-center mx-8 my-8'>
      {filterCategory.map((phone) => (
        <PhonesCard key={phone._id} phone={phone}></PhonesCard>
      ))}
    </div>
  );
};

export default Categories;
