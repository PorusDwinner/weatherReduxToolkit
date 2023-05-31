import { BsFillGeoAltFill } from "react-icons/bs";
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setLat, setLon, setshowMoreButtons, resetCoordinates, setRenderWeather } from "../Slicer/weatherSlicer";

const Buttons = () => {

    const dispatch = useDispatch();
    const showMoreButtons = useSelector((state) => state.showMoreButtons);

    const lat = useSelector((state) => state.lat);
    const lon = useSelector((state) => state.lon);

    const setCoordinates = () => {
        navigator.geolocation.getCurrentPosition(function (position) {
            if (position.coords.latitude > 0) {
                dispatch(setLat(position.coords.latitude));
                dispatch(setLon(position.coords.longitude));
                // Once We get coordinates, then render other buttons using this state
                dispatch(setshowMoreButtons(true));
            } else {
                alert('Failed, Make Sure You have given permission to access location');
                
            }
        });
    }

    const handelResetCoordinates = () => {
        dispatch(resetCoordinates(0));
        dispatch(setshowMoreButtons(false));
        dispatch(setRenderWeather(false));
    }

    const handelWeatherComponent = () => {
        dispatch(setRenderWeather(true));
    }

    return (
        <div>
            <div className="flex flex-col">
                
                <div className="flex space-x-4 justify-center items-center p-2
                hover:bg-black/20">
                
                    <BsFillGeoAltFill className="text-3xl"/>
                
                    <button className="text-3xl text-slate-800 font-medium"
                    onClick={() => setCoordinates()}>
                        Set Coordinates
                    </button>
                </div>

            </div>

            <div className="mt-4 flex w-[50%] display-block m-auto">
                {
                showMoreButtons && (
                    <div className="felx flex-col">
                        
                        <div className="flex text-white text-center">
                            <p className="text-slate-700 font-medium">
                                Lattitude  {lat}
                            </p>
                            <p className="text-slate-700 font-medium">
                                Longitude  {lon}
                            </p>
                        </div>

                        <div className="mt-4 flex text-2xl border py-2 rounded px-10
                        hover:bg-white cursor-pointer">
                            <BsFillSearchHeartFill className="mt-1 mr-4" />
                            <button onClick={ handelWeatherComponent }>
                                Check Weather
                            </button>
                        </div>

                        <div className='mt-4 text-2xl border py-2 px-10 rounded hover:bg-white cursor-pointer'>
                            <button onClick={ handelResetCoordinates }> 
                                Reset Coordinates
                            </button>
                        </div>    
                    </div>
                )}
            </div>
        </div>
    )
}


export default Buttons