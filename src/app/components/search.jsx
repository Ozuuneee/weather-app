"use client";

import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

export function SearchInput({ search, onChangeText, onPressEnter, onPressClick }) {
  const [cities, setCities] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

  const debouncedOnChange = debounce((value) => {
    setDebouncedSearch(value);
  }, 300);

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
    if (e.code === "Enter") {
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
    .sort((a, b) => a.city.localeCompare(b.city))
    .slice(0, 5); 

  const highlightMatch = (text, query) => {
    const index = text.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return text;

    const beforeMatch = text.slice(0, index);
    const match = text.slice(index, index + query.length);
    const afterMatch = text.slice(index + query.length);

    return (
      <>
        {beforeMatch}
        <span className="font-bold">{match}</span>
        {afterMatch}
      </>
    );
  };

  return (
    <div className="relative w-[580px] z-50 mr-28 ">
      <div className="w-full h-[80px] bg-white rounded-[48px] flex items-center gap-4 px-6 shadow-lg">
        <img className="opacity-50" src="search.png" alt="Search" />
        <input
          type="search"
          placeholder="Search city..."
          className="focus:outline-none border-none h-[60px] w-full text-lg"
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      {debouncedSearch && isSuggestionsVisible && (
        <div className="absolute w-full bg-white mt-2 rounded-3xl shadow-2xl overflow-y-auto max-h-[225px] z-50">
          {filteredCitiesName.map((cityObj, index) => (
            <div
              key={index}
              className="flex items-center gap-4 px-6 py-3 cursor-pointer hover:bg-gray-100"
              onClick={() => handleCityClick(cityObj.city)}
            >
              <img src="ping.png" alt="Location" className="opacity-30 w-6 h-8" />
              <span className="text-lg text-black font-medium">
                {highlightMatch(cityObj.city, debouncedSearch)}, {cityObj.country}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
