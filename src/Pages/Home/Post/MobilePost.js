import React from 'react';
import { Link } from 'react-router-dom';

const MobilePost = () => {
    const post = (
        <Link to='/mobileForm'><button className='btn btn-primary text-3xl px-5 mt-5'>Post</button></Link>
      );
    return (
        <div>
            <h1 className='text-center text-4xl landing-7 '>
        If you want to earn money by selling your phone.
        <br />
        <span className='font-semibold'>Please {post}</span>
      </h1>
        </div>
    );
};

export default MobilePost;