import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../Context Provider/ContextProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(GlobalContext);
  const location = useLocation();
  if (loading) {
    return <h1 className='text-5xl'>Loading...</h1>;
  }
  if (!user) {
    return <Navigate state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
