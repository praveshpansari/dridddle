import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const LanguageSelector = () => {
  // List of country codes to display flags for
  const countries = ["US", "ES", "FR", "DE"];

  const [selectedCountryCode, setSelectedCountryCode] = useState("US");

  const setSelectedCountryOption = (countryCode: string) => {
    setSelectedCountryCode(countryCode);
    // Call a function to update the language of the app
    // based on the selected option
  };

  return (
    <ReactFlagsSelect
      countries={countries}
      customLabels={{ US: "EN", ES: "ES", FR: "FR", DE: "DE" }}
      className="menu-flags"
      fullWidth={false}
      selected={selectedCountryCode}
      onSelect={(countryCode) => setSelectedCountryOption(countryCode)}
    />
  );
};

export default LanguageSelector;
