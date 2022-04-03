import React from "react";
import Quiz from "./pages/Quiz.jsx";
import Manage from "./pages/Manage.jsx";
import store from './redux/store.js';
import { Provider } from "react-redux";

const App = (props) => {
  return (
    // <Quiz quiz={data.quiz} />
    <Provider store={store}>
      <Manage />
    </Provider>
  );
};

export default App;