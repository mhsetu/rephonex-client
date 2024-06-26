import React, { useContext } from 'react';
import { GlobalContext } from '../../Context Provider/ContextProvider';
import { Link, useNavigate } from 'react-router-dom';
// import logo from '../../assets/logos.png';

const Login = () => {
  const navigate = useNavigate();
  const { SignInEmail, setUser } = useContext(GlobalContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const email = from.email.value;
    const password = from.password.value;
    console.log(email, password);
    SignInEmail(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        navigate('/');
        // toast.success('Successfully Login!');
        // navigate(location?.state?.from?.pathname || '/', { replace: true });
      })
      .catch((eror) => {
        console.error(eror.message);
      });
  };
  return (
    <div>
      <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
          <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
            Sign in to your account
          </h2>
        </div>

        <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label className='block text-sm font-medium leading-6 text-gray-900'>
                Email address
              </label>
              <div className='mt-2'>
                <input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='input input-bordered w-full'
                />
              </div>
            </div>

            <div>
              <div className='flex items-center justify-between'>
                <label className='block text-sm font-medium leading-6 text-gray-900'>
                  Password
                </label>
              </div>
              <div className='mt-2'>
                <input
                  id='password'
                  name='password'
                  type='password'
                  autoComplete='current-password'
                  required
                  className='input input-bordered w-full'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='btn btn-primary btn-outline w-full'
              >
                Sign in
              </button>
            </div>
          </form>

          <p className='mt-10 text-center text-sm text-gray-500'>
            Not a member?
            <span className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
              <Link to='signup'>Signup</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
