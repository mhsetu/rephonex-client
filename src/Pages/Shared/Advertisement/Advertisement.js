import React from 'react';

const Advertisement = () => {
  return (
    <div className='carousel w-full rounded-md'>
      <div id='slid1' className='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1559628233-e9eb5d83882f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className=''
          alt=''
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slid4' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slid2' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slid2' className='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1587049521765-7a44f3673ba4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className=' w-full'
          alt=''
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slid1' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slid3' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slid3' className='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1486162928267-e6274cb3106f?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full'
          alt=''
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slid2' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slid4' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
      <div id='slid4' className='carousel-item relative w-full'>
        <img
          src='https://images.unsplash.com/photo-1515022614687-234cd10406dd?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='w-full'
          alt=''
        />
        <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
          <a href='#slid3' className='btn btn-circle'>
            ❮
          </a>
          <a href='#slid1' className='btn btn-circle'>
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
