import { useEffect, useState } from 'react';
const useCustomer = (email) => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [isCustomerLoading, setIsCustomerLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/customer/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsAdmin(data);
        setIsCustomer(data?.isCustomer);
        setIsCustomerLoading(false);
      });
  }, [email]);
  return [isCustomer, isCustomerLoading];
};

export default useCustomer;
