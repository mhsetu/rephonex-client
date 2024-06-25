import React from 'react';

const Banner = () => {
  return (
    <div className='mx-8 mt-5'>
      <div className='carousel w-full h-[400px]'>
        <div id='slide1' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://i.ibb.co/68X2ryF/57c0de173940211-649956f2ab752.jpg'
            className='w-full '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide2' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://i.ibb.co/SJvzJ9C/66c21b125646553-611d457a25fb1.jpg'
            className='w-full '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide3' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://i.ibb.co/7WbC515/1f090c125646553-611d457a26bd7.jpg'
            className='w-full '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide4' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div id='slide4' className='carousel-item relative w-full'>
          <img
            alt=''
            src='https://media.idownloadblog.com/wp-content/uploads/2020/09/Apple-ad-iPhone-privacy-image-001.jpg'
            className='w-full '
          />
          <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
