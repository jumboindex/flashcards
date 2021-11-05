import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.id] = action.payload;
            state.topics[action.id].quizIDs = [];
        }
    }
});

export const selectTopic = state => state.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
