import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "./assets/css/index.css";
import Providers from "./components/providers.jsx";

createRoot(document.getElementById("root")).render(
  <Providers>
    <App />
  </Providers>
);
