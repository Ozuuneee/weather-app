import { Searchinput } from "../components/component";
import { Card } from "../card/card";
export function DayCard() {
  return (
    <div className="bg-stone-50 w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[50px] text-black">
      <Card value="day" />
      <Searchinput />
    </div>
  );
}
