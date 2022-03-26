import React from "react";
import Quiz from "./pages/Quiz.jsx";

import data from "../../database/mock_data.json";

const App = (props) => {
  return (
    <Quiz quiz={data.quiz} />
  );
};

export default App;