import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'contacts',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    devTools: true 
    //  process.env.NODE_ENV === 'development'

});

const persistor = persistStore(store);
const obj = { store, persistor };

export default obj;