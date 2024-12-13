"use client";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
import {
  Circle,
  CircleGray,
  MidCircle,
  Searchinput,
  Square,
  WhiteSquare,
} from "./components/component";

const API_KEY = "a9bd50909a544a9c84172455241312";

export default function Home() {
  return (
    <div className="h-screen w-full flex justify-center overflow-hidden">
      <div className="bg-stone-50 w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[42px] text-black">
        <Card value="day" />
        <Searchinput />
      </div>
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
        <Card value="night" />
        <Square size={100} top={326} left={-0} />
        <Square size={100} top={574} left={-0} />
        <WhiteSquare size={40} top={390} left={-12} />
        <WhiteSquare size={40} top={566} left={-12} />
      </div>
    </div>
  );
}

const Card = ({ value }) => {
  const cardBackgroundDay = "bg-[#FFFFFF]";
  const sun = "Sun.png";
  const dayTemperature = 24;
  const nightTemperature = 17;

  const temperature = value === "day" ? dayTemperature : nightTemperature;
  const moon = value === "day" ? sun : "Moon.png";
  const cardBg = value === "day" ? cardBackgroundDay : "bg-[#111827BF]";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";

  const colors = value === "day" ? "bg-[#FFFFFFBF]" : nightCardColors;
  const temperatureStyle =
    value === "day"
      ? "text-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#111827] to-[#6b7280] font-extrabold"
      : "text-[144px] text-transparent bg-clip-text bg-gradient-to-b from-[#F9FAFB] to-[#F9FAFB00] font-extrabold";

  return (
    <div
      className={`w-[414px] h-[832px] rounded-[48px] flex justify-center ${cardBg} z-30 overflow-hidden`}
    >
      <div className={`w-[398px] h-[504px] rounded-[42px] mt-[10px] ${colors}`}>
        <div className="flex justify-center">
          <div className="w-[290px] mt-[64px] ml-[48px]">
            <p className="text-md">September 10, 2024</p>
            <h2 className="text-4xl font-bold">Krakow</h2>
          </div>
          <div className="mt-[93px] w-[92px]">
            <img src="localization.png" alt="localization" />
          </div>
        </div>
        <div className="flex justify-center items-center mt-[30px]">
          <img className="h-[200px] w-[200px]" src={moon} alt={value} />
        </div>
        <div className="flex justify-center items-center mt-[30px]">
          <p className={temperatureStyle}>{temperature}°</p>
        </div>
      </div>
    </div>
  );
};
