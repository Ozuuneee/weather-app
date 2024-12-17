"use client"

import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export function SearchInput({ search, onChangeText, onPressEnter, onPressClick }) {
  const [cities, setCities] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  const debouncedOnChange = debounce((value) => {
    setDebouncedSearch(value);
  }, 500);

  const handleChange = (e) => {
    onChangeText(e);
    debouncedOnChange(e.target.value);
    setIsSuggestionsVisible(true);
  };

  const handleCityClick = (cityName) => {
    onPressClick(cityName);
    setIsSuggestionsVisible(false);
    onChangeText({ target: { value: cityName } });
  };

  const handleKeyDown = (e) => {

    if (e.code === 'Enter') {
      setIsSuggestionsVisible(false);
      onPressEnter && onPressEnter();
    }
  };

  useEffect(() => {
    fetch(`https://countriesnow.space/api/v0.1/countries`)
      .then((res) => res.json())
      .then((countryData) => {
        let arr = [];
        countryData.data.forEach((country) => {
          country.cities.forEach((city) =>
            arr.push({
              city: city,
              country: country.country,
            })
          );
        });
        setCities(arr);
      });
  }, []);

  const filteredCitiesName = cities
    .filter((obj) => obj.city.toLowerCase().includes(debouncedSearch.toLowerCase()))
    .slice(0, 10);

  return (
    <div className="w-[580px] h-[80px] bg-[#ffffff] rounded-[48px] flex items-center gap-[24px] text-black mr-[200px] z-50">
      <img className="opacity-50 ml-[24px]" src="search.png" alt="Search" />
      <input
        type="search"
        placeholder="Search city..."
        className="focus:outline-none border-none h-[60px] w-[350px]"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {debouncedSearch && isSuggestionsVisible && (
        <div className="w-[580px] max-h-[200px] bg-[#ffffff] absolute top-[100px] rounded-3xl overflow-y-scroll px-[20px] py-2 mt-10 z-50 drop-shadow-2xl">
          {filteredCitiesName.map((cityObj, index) => {
            return (
              <div
                className="text-black text-[28px] flex items-center gap-3 z-50 cursor-pointer drop-shadow-2xl font-bold mt-[5px]"
                key={index}
                onClick={() => handleCityClick(cityObj.city)}
              >
                <img src="ping.png" className="opacity-20 w-[23.33px] h-[33.33px]"/>
                {cityObj.city}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
