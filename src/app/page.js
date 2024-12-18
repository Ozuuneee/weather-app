"use client";
import 'typeface-manrope';
import { useState, useEffect } from "react";
import { SearchInput } from "./components/search";
import { Circle } from "./components/circle";
import { Square } from "./components/square";
import { WhiteSquare } from "./components/whitesquare";
import { MidCircle } from "./components/midcircle";
import { CircleGray } from "./components/circlegray";
import { Card } from "./card/card"

const API_KEY = "578e898bb4624211afc73330241312";

export default function Home() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("Ulaanbaatar");
  const [forecastDate, setForecastDate] = useState("");
  const [dayweather, setDayWeather] = useState({
    number: 0,
    condition: "Ulaanbaatar",
  });
  const [nightweather, setNightWeather] = useState({
    number: 0,
    condition: "Ulaanbaatar",
  });

  const onChangeText = (e) => {
    setSearch(e.target.value);
  };

  const handlePressEnter = () => {
      setCity(search.trim());
   
  };

  const onPressClick = (filteredCitiesName) => {
    setCity(filteredCitiesName);
    setSearch("");
  }

  useEffect(() => {
    if (city) {
      fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
      )
        .then((response) => response.json())
        .then((data) => {
          const forecastDay = data.forecast?.forecastday[0];

          const date = new Date(forecastDay?.date);
          const formattedDate = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          setForecastDate(formattedDate);

          setDayWeather({
            number: Math.round(forecastDay.day.maxtemp_c),
            condition: forecastDay.day.condition.text,
          });
          setNightWeather({
            number: Math.round(forecastDay.day.mintemp_c),
            condition: forecastDay.hour[23].condition.text,
          });
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [city]);

  return (
    <div className="h-screen w-full flex justify-center overflow-hidden font-[manrope]">
      <div className="bg-[#F3F4F6] w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[50px] text-black">
        <Card
          value="day"
          city={city}
          weather={dayweather}
          forecastDate={forecastDate}
        />
        <SearchInput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={handlePressEnter}
          onPressClick={onPressClick}
        />
      </div>

      <div className="relative w-full h-[1200px] bg-[#0F141E] flex items-center flex-col-reverse pb-[200px] justify-between  font-[manrope]">

        <MidCircle size={160} top={420} left={-80} />
        <Circle size={340} top={330} left={-170} />
        <CircleGray size={340} top={330} left={-170} />
        <Circle size={540} top={230} left={-270} />
        <CircleGray size={540} top={230} left={-270} />
        <Circle size={940} top={50} left={-460} />
        <CircleGray size={940} top={50} left={-460} />
        <Circle size={1340} top={-120} left={-650} />
        <CircleGray size={1340} top={-120} left={-650} />
        <Circle size={1740} top={-300} left={-880} />
        <CircleGray size={1740} top={-300} left={-880} />
        <Card
          value="night"
          city={city}
          weather={nightweather}
          forecastDate={forecastDate}
        />
        <img src="ellipse.png" className="absolute max-w-32 right-0 left-[690px] bottom-[150px]" />
        <img src="ellipseYellow.png" className="absolute max-w-44 right-[1790px] z-20 top-28"/>
        <Square size={100} top={326} left={-0} />
        <Square size={100} top={574} left={-0} />
        <WhiteSquare size={40} top={390} left={-12} />
        <WhiteSquare size={40} top={566} left={-12} />
        <img src="left.png" className="absolute top-[450px] left-[-50px]" />
        <img src="right.png" className="absolute top-[450px] left-[10px]" />
      </div>
    </div>
  );
}

