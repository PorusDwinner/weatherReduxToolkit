import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const WeatherData = () => {

  const lat = useSelector((state) => state.lat);
  const lon = useSelector((state) => state.lon);
  const API_KEY = 'c4f4371eace13debb08049c276a9c477';
  const [weatherData, setWeatherData] = useState();

  const renderCheckWeather = useSelector((state) => state.renderCheckWeather);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
      const data = await result.json();
      setWeatherData(data);
    };
    fetchData()
  }, [lat, lon]);

  return (
    <div className="w-[70%] display-block m-auto">
      {
        !renderCheckWeather ? (
          <div className="text-center">
            <p className="text-white font-medium">
              Click on 'set Coordinates' button and then 'check weather' at your location
            </p>
          </div>
        ) : (
          <div>
            {
              weatherData && (
                <div className="text-center space-y-4">
                  <p className="text-white font-bold text-2xl">
                    {weatherData.name},
                    <span>{weatherData.sys.country}</span>,
                    <span className="text-lg">{weatherData.weather[0].main}</span>
                  </p>

                  <div className="flex">
                    <p className="flex flex-col text-white text-lg m-4">
                      <span>Temp</span>{weatherData.main.temp}
                    </p>

                    <p className="flex flex-col text-white text-lg m-4">
                      <span>Max</span>{weatherData.main.temp_max}
                    </p>

                    <p className="flex flex-col text-white text-lg m-4">
                      <span>Min</span>{weatherData.main.temp_min}
                    </p>
                  </div>

                  <p className="flex text-white text-lg ml-4">
                    <span className="mt-4 mr-4">Feels Like</span>
                    <span className="mt-4 ml-4">{weatherData.main.feels_like} K</span></p>

                  <p className="flex text-white text-lg ml-4">
                    <span className="mt-2 mr-4">Humidity</span>
                    <span className="mt-2 ml-4">{weatherData.main.humidity}%</span></p>

                  <p className="flex text-white text-lg ml-4">
                    <span className="mt-2 mr-4">Pressure</span>
                    <span className="mt-2 ml-4">{weatherData.main.pressure} units</span></p>

                  <p className="flex text-white text-lg ml-4">
                    <span className="mt-2 mr-4">Visibility</span>
                    <span className="mt-2 ml-4">{weatherData.visibility} units</span></p>

                  <p className="text-white text-xl text-center mt-4">Wind</p>
                  
                  <div className="flex justify-around">

                    <p className="flex flex-col text-white text-lg mt-2">
                      <span>Speed</span>{weatherData.wind.speed} Km/h
                    </p>

                    <p className="flex flex-col text-white text-lg mt-2">
                      <span>Degree</span>{weatherData.wind.deg}
                    </p>
                  </div>
                </div>
              )
            }

          </div>
        )
      }
    </div>
  )
}

export default WeatherData