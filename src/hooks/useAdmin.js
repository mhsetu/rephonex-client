import { useEffect, useState } from 'react';
const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    fetch(`https://rephonex-server.vercel.app/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsAdmin(data);
        setIsAdmin(data?.isAdmin);
        setIsAdminLoading(false);
      });
  }, [email]);
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
