import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/base.css";
import App from "./App.tsx";
import { Analytics } from "@vercel/analytics/react";
import { applyTrackingParams, beforeSend } from "./utils/analytics";

applyTrackingParams();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Analytics beforeSend={beforeSend} />
  </StrictMode>,
);
