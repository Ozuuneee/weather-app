import {
  Circle,
  CircleGray,
  MidCircle,
  Square,
  WhiteSquare,
} from "../components/component";
import { Card } from "../card/card";
import { useState, useEffect } from "react";

const API_KEY = "578e898bb4624211afc73330241312"

export function NightCardClass() {
  const [city] = useState("");
  const [nightweather,setNightWeather] = useState({
    nothing:0 ,
    condition:'',
  })
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setNightWeather({
          nothing:(data.forecast.forecastday[0].day.mintemp_c),
          condition:(data.forecast.forecastday[0].day.condition.text)
        })   
      });
  }, [city]);
  return (
    <div className="relative w-full h-[1200px] bg-[#0F141E] flex items-center flex-col-reverse justify-between pb-[200px]">
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
      <Card value="night" city={city} nothing={nightweather.nothing} condition={dayweather.condition} />
      <Square size={100} top={326} left={-0} />
      <Square size={100} top={574} left={-0} />
      <WhiteSquare size={40} top={390} left={-12} />
      <WhiteSquare size={40} top={566} left={-12} />
      <img src="left.png" className="absolute top-[450px] left-[-50px]"/>
      <img src="right.png" className="absolute top-[450px] left-[10px]"/>
    </div>
  );
}
