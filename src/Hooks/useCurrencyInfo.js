import { use, useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, Setdata] = useState({}); //empty object so atleast it will not crash
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => Setdata(res[currency]));
  }, [currency]);

  return data;
}
export default useCurrencyInfo;
