import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers"; 
import watcherSagas from "./saga/index";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: gameReducer,  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),  
});


sagaMiddleware.run(watcherSagas);
export default store;
