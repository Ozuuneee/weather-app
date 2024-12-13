import { DayCard } from "../class/daycard";
import { NightCard } from "../class/nightcard";

export function Cards() {
  return (
    <div className="h-screen w-full flex justify-center overflow-hidden">
      <DayCard />
      <NightCard />
    </div>
  );
}
