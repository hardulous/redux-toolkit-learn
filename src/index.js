import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./services/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    {/* Now store and all features of redux toolkit is available to our app */}
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);
