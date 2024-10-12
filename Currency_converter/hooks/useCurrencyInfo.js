import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  const access_key = "6794a32ce463f79e15aff0e9a2d54eff" 

  useEffect(() => {
    fetch(`http://api.exchangeratesapi.io/v1/latest? access_key=${access_key}&base=USD&symbols=EUR`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData[currency]));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
