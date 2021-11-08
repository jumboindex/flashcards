import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: {}
};

const cardSlice = createSlice({
    name: 'cards',
    initialState: initialState,
    reducers:{
        addCard: (state, action) => {
            state.cards[action.payload.id] = action.payload;        
        }
    }
})

export const selectCards= state => state.cards.cards;

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
