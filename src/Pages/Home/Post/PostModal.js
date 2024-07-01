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
      <div className='modal modal-backdrop'>
        <div className='modal-box w-11/12 max-w-5xl'>
          <label
            htmlFor='post'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>

          <div>
            <PostModalForm></PostModalForm>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
