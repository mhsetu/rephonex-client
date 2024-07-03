import React from 'react';
import BookModal from './BookModal';
import BookingForm from './BookingForm';

const Booking = ({ id,phone_name }) => {
  return (
    <div>
      {/* The button to open modal */}
      {/* <label htmlFor='post' className='btn'>
        open modal
      </label> */}

      {/* Put this part before </body> tag */}
      <input type='checkbox' id='booking' className='modal-toggle' />
      <div className='modal '>
        <div className='modal-box w-11/12 max-w-5xl'>
          <label
            htmlFor='booking'
            className='btn btn-sm btn-circle absolute right-2 top-2'
          >
            ✕
          </label>
          <div>
            <BookModal id={id} phone_name={phone_name}></BookModal>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
