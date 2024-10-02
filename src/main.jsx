import { createRoot } from "react-dom/client";
import { Provider } from "react-redux"; // Импортируем Provider
import App from "./App.jsx";
import "./index.scss";
import "./nullstyle.scss";
import { store } from "./store/store.js"; // Импортируем store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
