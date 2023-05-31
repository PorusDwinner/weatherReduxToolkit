import { configureStore } from "@reduxjs/toolkit";
import reducer from '../Slicer/weatherSlicer';

const store = configureStore({
    reducer
});

export default store;