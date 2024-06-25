import React, { useContext } from 'react';
import { GlobalContext } from '../../Context Provider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useSales from '../../hooks/useSales';

const SalesRoute = ({ children }) => {
  const { validUser, loading, user } = useContext(GlobalContext);
  console.log(validUser);
  console.log(validUser);

  const [isSale, isSaleLoading] = useSales(user?.email);
  console.log(isSale);
  const location = useLocation();
  if (loading || isSaleLoading) {
    return <div>Loading ...</div>;
  }

  if (user && isSale) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default SalesRoute;
