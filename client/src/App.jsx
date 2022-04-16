import * as React from "react";

import store from './redux/store.js';
import { Provider } from "react-redux";

import { AppRoutes } from "./AppRoutes.jsx";

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;