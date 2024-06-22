import React from 'react';
import PostModalForm from './PostModalForm';

const PostModal = () => {
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor='post' className='btn'>
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type='checkbox' id='post' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box w-11/12 max-w-5xl'>
          <label
            htmlFor='post'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          {/* <h3 className='text-lg font-bold'>
            Congratulations random Internet user!
          </h3>
          <p className='py-4'>
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p> */}

          <div>
            <PostModalForm></PostModalForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
