import React, { useContext } from 'react';
import { GlobalContext } from '../../Context Provider/ContextProvider';
import { Navigate, useLocation } from 'react-router-dom';
import useCustomer from '../../hooks/useCustomer';

const CustomersRoute = ({ children }) => {
  const { loading, user } = useContext(GlobalContext);

  const [isCustomer, isCustomerLoading] = useCustomer(user?.email);
  console.log(isCustomer);
  const location = useLocation();
  if (loading || isCustomerLoading) {
    return <div>Loading ...</div>;
  }

  if (user && isCustomer) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
};

export default CustomersRoute;
