import { Icons } from "../icons/icons";

export const Card = ({ value, city, number,nothing,condition }) => {
  const cardBackgroundDay = "bg-[#FFFFFF]";
  const sun = "Sun.png";

  const temperature = value === "day" ? number : nothing;
  const moon = value === "day" ? sun : "Moon.png";
  const cardBg = value === "day" ? cardBackgroundDay : "bg-[#111827]";
  const nightCardColors =
    "bg-[111827bf] bg-gradient-to-b from-[#1F2937] to-[#11182700] text-white shadow-[#111827]";

  const textStyle = value === "day" ? "text-[#FF8E27] font-bold text-[24px]" : "text-[#777CCE] font-bold text-[24px]"
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
            <h2 className="text-4xl font-bold">{city}</h2>
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
        <div className="mt-[30px] ml-[50px]"><p className={textStyle}>{condition}</p></div>
        <div className="flex justify-center items-center mt-36 gap-20">
          <Icons value={value} />
        </div>
      </div>
    </div>
  );
};
