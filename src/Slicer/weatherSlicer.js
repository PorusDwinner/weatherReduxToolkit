import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
    lat : 0,
    lon : 0,
    showMoreButtons : false,
    renderCheckWeather : false,
};

const weatherSlicer = createSlice({
    name : 'Weather',
    initialState,
    reducers : {
        setLat(state , action){
            state.lat = action.payload;
        },

        setLon(state , action){
            state.lon = action.payload;
        },

        setshowMoreButtons(state , action){
            state.showMoreButtons = action.payload;
        },

        resetCoordinates(state , action){
            state.lat = action.payload;
            state.lon = action.payload;
        },

        setRenderWeather(state , action){
            state.renderCheckWeather = action.payload;
        }
    }
});

export const { setLat , setLon , setshowMoreButtons , resetCoordinates , setRenderWeather } = weatherSlicer.actions;
export default weatherSlicer.reducer;