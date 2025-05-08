import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* StrictMode는 잠재적 버그를 감지하고, 안전하지 않은 코드를 알려주는 개발 전용 도우미다. */}
    <App />
  </StrictMode>
);
