import React, { useEffect, useState } from 'react';

import { useLoaderData } from 'react-router-dom';

import PhonesCard from '../../Home/Phones/PhonesCard';
import { useQuery } from '@tanstack/react-query';

const Categories = () => {
  const category = useLoaderData();

  const { data: phones = [] } = useQuery({
    queryKey: ['phones'],
    queryFn: async () => {
      const res = await fetch('https://rephonex-server.vercel.app/phones');
      const data = await res.json();
      return data;
    },
  });

  console.log(phones);

  const filterCategory = phones.filter(
    (phone) => phone?.category_id === category.category_id
  );
  // console.log(filterCategory);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mx-8 my-8'>
      {filterCategory.map((phone) => (
        <PhonesCard key={phone._id} phone={phone}></PhonesCard>
      ))}
    </div>
  );
};

export default Categories;
