import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import LoadingSlice from '../slices/LoadingSlice';

const rootReducer = combineReducers({
    //cart: cartReducer,
    //settings: settingsReducer,
    loading: LoadingSlice
    // Aggiungi altri reducer qui come i commenti sopra
});


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // Disabilita il controllo serializzabile per gli slice che utilizzano funzioni non serializzabili come gli action creator thunk
    }).concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };
