import React from "react";
import Quiz from "./pages/Quiz.jsx";
import Manage from "./pages/Manage.jsx";

import data from "../../database/mock_data.json";


const App = (props) => {
  return (
    // <Quiz quiz={data.quiz} />
    <Manage />
  );
};

export default App;