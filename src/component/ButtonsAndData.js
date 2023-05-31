import Buttons from "../pages/Buttons";
import WeatherData from "../pages/WeatherData";

export const ButtonsAndData = () => {
    return (
        <div id="mainContainer"
        className="flex justify-around w-[80%] display-block m-auto mt-[3rem]">
            <div className="p-10 rounded w-[45%]">
                <Buttons />
            </div>

            <div className="p-8 rounded w-[45%]">
                <WeatherData />
            </div>
        </div>
    )
}
