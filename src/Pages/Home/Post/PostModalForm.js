import React, { useContext, useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { GlobalContext } from '../../../Context Provider/ContextProvider';

const PostModalForm = () => {
  const [category, setCategory] = useState([]);
  // const [value, setValue] = useState(dayjs(new Date()));
  const value = dayjs(new Date());
  const [reset, setReset] = useState(null);
  const { user } = useContext(GlobalContext);
  useEffect(() => {
    fetch(`http://localhost:5000/category`)
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, [category]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const brand = form.brand.value;
    const email = form.email.value;
    const image = form.image.value;
    const ram = form.ram.value;
    const camera = form.camera.value;
    const duration = form.duration.value;
    const category = form.category.value;
    const date = form.date.value;
    const original = form.original_price.value;
    const selling = form.selling_price.value;
    const model = form.model.value;
    const description = form.description.value;

    const info = {
      brand,
      category_id: category,
      picture: image,
      phone_name: phone,
      phone_description: description,
      location,
      ram,
      camera,
      resale_price: selling,
      original_price: original,
      usage_duration: duration,
      posted_date: date,
      seller_name: name,
    };

    console.log(
      name,
      phone,
      email,
      location,
      brand,
      image,
      ram,
      camera,
      duration,
      category,
      date,
      original,
      selling,
      model,
      description
    );

    fetch(`http://localhost:5000/phones`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
          // setReset(null);
        }
      });
  };

  return (
    <div>
      <div className='  px-6 py-24 sm:py-32 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            Phone & Personal Details
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className='mx-auto mt-16 max-w-xl sm:mt-20'
        >
          <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
            <div>
              <label
                for='first-name'
                className='block text-sm font-semibold leading-6 text-gray-900'
              >
                Name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='name'
                  defaultValue={user.displayName}
                  readOnly
                  placeholder='Your Full Name'
                  autocomplete='given-name'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Phone Number
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='phone'
                  placeholder='Your Phone Number'
                  autocomplete='family-name'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Location
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  type='text'
                  name='location'
                  placeholder='Your Location'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Phone Brand
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='brand'
                  placeholder='Brand'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Email
              </label>
              <div className='mt-2.5'>
                <input
                  type='email'
                  name='email'
                  defaultValue={user?.email}
                  readOnly
                  placeholder='Your Email'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Phone Name
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='model'
                  placeholder='Phone Model Name'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-2'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Photo
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='image'
                  placeholder='Phone Photo URL'
                  autocomplete='email'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Ram
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='ram'
                  placeholder='Phone RAM'
                  autocomplete='email'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Camera
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='camera'
                  placeholder='Phone Camera'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>
            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Usage Duration
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='duration'
                  placeholder='Usage Duration'
                  className='block input input-bordered w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Category
              </label>
              <div className='relative mt-2.5'>
                <div className='form-control w-full max-w-xs'>
                  <select name='category' className='select select-bordered'>
                    <option disabled selected>
                      Pick one
                    </option>
                    {category.map((list) => (
                      <option value={list.category_id} key={list._id}>
                        {list.category_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Expected Price
              </label>
              <div className='mt-2.5'>
                <input
                  type='text'
                  name='selling_price'
                  placeholder='Expected Price'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Original Price
              </label>
              <div className='mt-2.5'>
                <input
                  required
                  type='text'
                  name='original_price'
                  placeholder='Original Price'
                  autocomplete='given-price'
                  className='block input input-bordered w-full rounded-md px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400  sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='block'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Today
              </label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateField', 'DateField']}>
                  <DateField
                    name='date'
                    // value={value}
                    // onChange={() => setValue(value)}
                    label='Current date'
                    // disabled
                    readOnly
                    defaultValue={value}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>

            <div className='sm:col-span-2'>
              <label className='block text-sm font-semibold leading-6 text-gray-900'>
                Description
              </label>
              <div className='mt-2.5'>
                <textarea
                  name='description'
                  placeholder='Description about your phone condition'
                  rows='4'
                  className='block textarea textarea-bordered textarea-lg w-full rounded-md  px-3.5 py-2 text-gray-900 shadow-sm  placeholder:text-gray-400 sm:text-sm sm:leading-6'
                ></textarea>
              </div>
            </div>
          </div>
          <div className='modal-action mt-10'>
            <label
              htmlFor='post'
              type='submit'
              className='btn block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Submit
            </label>
          </div>
          {/* <div className='mt-10'>
            <button
              type='submit'
              className='block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default PostModalForm;
