import { FiMapPin } from "react-icons/fi";

const citiesData = [
  "Ulaanbaatar",
  "London",
  "Paris",
  "Berlin",
  "Rome",
  "Madrid",
  "Vienna",
  "Brussels",
  "Amsterdam",
  "Warsaw",
  "Athens",
  "Oslo",
  "Stockholm",
  "Helsinki",
  "Zurich",
  "Geneva",
  "Copenhagen",
  "Dublin",
  "Budapest",
  "Prague",
  "Milan",
  "Florence",
  "Naples",
  "Lisbon",
  "Barcelona",
  "Valencia",
  "Seville",
  "Porto",
  "Bucharest",
  "Belgrade",
  "Sarajevo",
  "Skopje",
  "Kiev",
  "Tbilisi",
  "Yerevan",
  "Baku",
  "Istanbul",
  "Moscow",
  "Saint Petersburg",
  "Kazan",
  "Novosibirsk",
  "Kyiv",
  "Almaty",
  "Ashgabat",
  "Bishkek",
  "Tashkent",
  "Yekaterinburg",
  "Chisinau",
  "Baku",
  "Tashkent",
  "Baku",
  "Dhaka",
  "Karachi",
  "Mumbai",
  "New Delhi",
  "Kolkata",
  "Chennai",
  "Bangalore",
  "Hyderabad",
  "Lahore",
  "Islamabad",
  "Singapore",
  "Hong Kong",
  "Shanghai",
  "Beijing",
  "Shenzhen",
  "Guangzhou",
  "Tokyo",
  "Osaka",
  "Seoul",
  "Manila",
  "Jakarta",
  "Bangkok",
  "Ho Chi Minh City",
  "Hanoi",
  "Kuala Lumpur",
  "Chengdu",
  "Xi'an",
  "Qingdao",
  "Hangzhou",
  "Suzhou",
  "Taipei",
  "Bangalore",
  "Chengdu",
  "Jakarta",
  "Seoul",
  "Bangkok",
  "Ho Chi Minh City",
  "Colombo",
  "Dhaka",
  "Kathmandu",
  "Bangalore",
  "Chennai",
  "Astana",
  "Manama",
  "Doha",
  "Abu Dhabi",
  "Riyadh",
  "Muscat",
  "Dubai",
]

export function SearchInput({ search, onChangeText, onPressEnter, onPressClick }) {
  const suggest = citiesData?.filter((citiesName) => citiesName?.includes(search));
  console.log(suggest)
  return (
    <div className="w-[580px] h-[80px] bg-[#ffffff] rounded-[48px] flex items-center gap-[24px] text-black mr-[200px] z-50">
      <img className="opacity-50 ml-[24px]" src="search.png" alt="Search" />
      <input
        type="search"
        placeholder="Search city..."
        className="focus:outline-none border-none h-[60px] w-[350px]"
        value={search}
        onChange={onChangeText}
        onKeyDown={onPressEnter}
      />
      {search && (
        <div 
          className="w-[580px] max-h-[200px] bg-[#ffffff] absolute top-[100px] rounded-3xl overflow-y-scroll px-[20px] py-2 mt-10 z-50 drop-shadow-2xl"
        >
          {suggest.map((filteredCitiesName, index) => {
            return (
              <div
                className="text-black text-[28px] flex items-center gap-3 z-50 cursor-pointer drop-shadow-2xl font-bold mt-[5px]"
                key={index}
                onClick={() => onPressClick(filteredCitiesName)}
              > 
                <FiMapPin className="opacity-20 w-10 h-10"/>
                {filteredCitiesName}
              </div>
            );
          })}
          </div>
      )}
    </div>
  );
}
