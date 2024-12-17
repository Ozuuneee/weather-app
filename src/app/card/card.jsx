"use client"

import { Icons } from "./icons"
import { useState, useEffect } from "react"

export function Card({ value, city, weather, forecastDate }) {
    const isDay = value === "day";
     const [dayStatus, setDayStatus] = useState("/Sun.png")
      const [nightStatus, setNightStatus] = useState("/Moon.png")
      const weatherStatus = isDay ? dayStatus : nightStatus;
      const { number, condition } = weather;
      
      useEffect(() => {
        if(isDay){
          if(condition.includes("Sunny")){
            setDayStatus("/Sun.png")
          }else if(condition.includes("Overcast")){
            setDayStatus("/Clouds.png")
          }else if(condition.includes("snow")){
            setDayStatus("/Snow.png")
          }else if(condition.includes("rain")){
            setDayStatus("/Rain.png")
          }else if(condition.includes("thunder")){
            setDayStatus("/Thunder.png")
          }else if(condition.includes("wind")){
            setDayStatus("/Wind.png")
          }else if(condition.includes("Mist")){
            setDayStatus("/Clouds.png")
          }else if(condition.includes("Cloudy")){
            setDayStatus("/Clouds.png")
          }
        }else{
          if(condition.includes("Clear")){
            setNightStatus("/Moon.png")
          }else if(condition.includes("Overcast")){
            setNightStatus("/Cloudy.png")
          }else if(condition.includes("snow")){
            setNightStatus("/Snowy.png")
          }else if(condition.includes("rain")){
            setNightStatus("/Rainy.png")
          }else if(condition.includes("thunder")){
            setNightStatus("/Thunderstorm.png")
          }else if(condition.includes("wind")){
            setNightStatus("/Windy.png")
          }else if(condition.includes("Cloudy")){
            setNightStatus("/Cloudy.png")
          }
        }
      },[city, condition])
  
    const temperatureStyle = isDay
      ? "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6b7280] font-extrabold"
      : "text-[96px] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] font-extrabold";
  
    const conditionStyle = isDay
      ? "text-[#FF8E27] font-bold text-[24px]"
      : "text-[#777CCE] font-bold text-[24px]";
  
    const cardBg = isDay ? "bg-[#FFFFFFbf]" : "bg-[#111827BF]";
    const nightCardColors =
      "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";
    const colors = isDay ? "bg-[#FFFFFFbf]" : nightCardColors;
    const textColor = isDay ? "text-black" : "text-[#9CA3AF]";
  
    return (
      <div
        className={`w-[414px] h-[832px] rounded-[48px] flex justify-center ${cardBg} z-30 overflow-hidden`}
      >
        <div className={`w-[398px] h-[504px] rounded-[42px] mt-[10px] ${colors}`}>
          <div className="flex justify-center">
            <div className="w-[290px] mt-[64px]">
              <p className={`text-md ${textColor}`}>{forecastDate || "Date Unavailable"}</p>
              <h2 className="text-5xl font-extrabold mt-2 h-24">{city || "Unknown"}</h2>
            </div>
            <div><img src="localization.png" className="mt-[74px]" /></div>
          </div>
          <div className="flex justify-center items-center mt-[40px]">
            <img className="h-[250px] w-[250px] drop-shadow-[0_5px_25px_rgba(255,255,255,0.5)]" src={weatherStatus} alt={value} />
          </div>
          <div className="flex justify-center items-center mr-[155px] mt-[30px] font-bold">
            <p className={temperatureStyle}>{number || "0"}°</p>
          </div>
          <div className=" ml-[45px] h-[72px]">
            <p className={conditionStyle}>{condition || "No Data"}</p>
          </div>
          <div className="flex justify-center items-center gap-20 mt-8">
            <Icons value={value} />
          </div>
        </div>
      </div>
    );
  }
  