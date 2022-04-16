import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import store from './redux/store.js';
import { Provider } from "react-redux";

import { Quiz } from "./pages/quiz/Quiz.jsx"
import { Manage } from "./pages/manage/Manage.jsx";

const App = () => {
  return (
    // <Quiz quiz={data.quiz} />
    <Provider store={store}>
      {/* <Manage /> */}
      <Routes>
        <Route path="quiz" element={<Quiz />} />
        <Route path="manage" element={<Manage />} />
      </Routes>
    </Provider>
  );
};

export default App;