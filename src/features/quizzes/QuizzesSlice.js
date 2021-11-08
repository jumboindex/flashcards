import { createSlice } from "@reduxjs/toolkit"
import { addQuizId } from "../topics/TopicSlice";


const initialState = {
    quizzes: {}
}

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: initialState,
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const dispatchNewQuizTopic = (payload) => {
    const quizIdPayload = {
        quizId: payload.id,
        topicId: payload.topicId
    }
    
    return (dispatch, getState) => {
        dispatch(addQuiz(payload));
        dispatch(addQuizId(quizIdPayload));
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
