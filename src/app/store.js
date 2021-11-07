import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';
import topicsReducer from "../features/topics/TopicSlice";
import QuizzesReducer from "../features/quizzes/QuizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: QuizzesReducer
  },
}, devToolsEnhancer() );
