import { Searchinput } from "../components/component";
import { Card } from "../card/card";

const API_KEY = "578e898bb4624211afc73330241312"

export function DayCard() {
  const [city] = useState("");
  const [dayweather,setDayWeather] = useState({
    number:0 ,
    condition:'',
  })
  useEffect(() => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setDayWeather({
          number:(data.forecast.forecastday[0].day.maxtemp_c),
          condition:(data.forecast.forecastday[0].day.condition.text)
        })
      });
  }, [city]);
  return (
    <div className="bg-stone-50 w-full h-[1200px] flex items-center flex-col-reverse justify-between pb-[200px] pt-[50px] rounded-l-[50px] text-black">
      <Card value="day" city={city} number={dayweather.number} condition={dayweather.condition}/>
        <Searchinput
          search={search}
          onChangeText={onChangeText}
          onPressEnter={onPressEnter}
        />
    </div>
  );
}
