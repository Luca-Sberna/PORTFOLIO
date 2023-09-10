// loadingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false, // Imposta lo stato iniziale su "false" (non caricamento)
    reducers: {
        startLoading: (state) => true, // Azione per impostare lo stato su "true" (caricamento in corso)
        stopLoading: (state) => false, // Azione per impostare lo stato su "false" (caricamento completato)
    },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
