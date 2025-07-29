import React, { useId } from "react"; //useId() ensures consistency, uniqueness, and accessibility without manual tracking.

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-yellow-200 p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            let value = e.target.value;

            // Remove leading zeros unless it's "0" or empty
            if (value.length > 1 && value.startsWith("0")) {
              value = value.replace(/^0+/, "");
            }

            onAmountChange && onAmountChange(Number(value));
          }} //sometimes js gives the numbers is string format
          //so use Number to convert it into number format
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;

/* Without SSR (Client-Side Rendering - CSR):
Browser loads an empty HTML page.
Downloads JavaScript files.
React runs in the browser, builds the page.
Content appears after React finishes rendering.

With SSR:
Server renders the React components to HTML.
Sends complete HTML to the browser.
User sees content instantly.
React "hydrates" (activates) the page for interactivity. */
