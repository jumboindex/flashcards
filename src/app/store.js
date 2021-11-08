import { configureStore } from "@reduxjs/toolkit";
import devToolsEnhancer from 'remote-redux-devtools';
import topicsReducer from "../features/topics/TopicSlice";
import quizzesReducer from "../features/quizzes/QuizzesSlice";
import cardsReducer from "../features/cards/CardsSlice";

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
}, devToolsEnhancer());
