import React from 'react';
import PostModal from './PostModal';

const Post = () => {
  const post = (
    // <button className='btn btn-primary text-3xl px-5 mt-5'>Post</button>
    <label htmlFor='post' className='btn btn-primary text-3xl px-5 mt-5'>
      Post
    </label>
  );
  return (
    <div>
      <h1 className='text-center text-4xl landing-7 '>
        If you want to earn money by selling your phone.
        <br />
        <span className='font-semibold'>Please {post}</span>
      </h1>
      <PostModal></PostModal>
    </div>
  );
};

export default Post;
