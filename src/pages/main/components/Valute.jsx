import React, { useState } from "react";

function Valute({onSelectCurrency }) {
  const options = ["$", "€", " ₼"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleSelectChange = (event) => {
    const selectedCurrency = event.target.value;
    setSelectedOption(selectedCurrency);
    onSelectCurrency(selectedCurrency);
  };

  return (
    <div>
      <select id="valuteCombobox" value={selectedOption} onChange={handleSelectChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Valute;
