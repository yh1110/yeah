import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./css/index.css";
import UIComponent from "./UIComponent";
// const UIComponent = lazy(() => import("./UIComponent.tsx"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIComponent />
  </StrictMode>
);
