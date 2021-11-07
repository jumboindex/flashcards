import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        addTopic: (state, action) => {
            action.payload.quizIds = [];
            state.topics[action.payload.id] = action.payload;
        },
        addQuizId: (state, action) => {
            const { topicId, quizId } = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    }
});

export const selectTopic = state => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;
