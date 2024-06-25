import { useEffect, useState } from 'react';
const useSales = (email) => {
  const [isSale, setIsSale] = useState(true);
  const [isSaleLoading, setIsSaleLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/users/sales/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // setIsAdmin(data);
        setIsSale(data?.isSale);
        setIsSaleLoading(false);
      });
  }, [email]);
  return [isSale,isSaleLoading];
};

export default useSales;
