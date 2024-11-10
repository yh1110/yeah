import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./css/index.css";
const UIComponent = lazy(() => import("./UIComponent.tsx"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div style={{ backgroundColor: "#121212", height: "100vh" }}></div>}>
      <UIComponent />
    </Suspense>
  </StrictMode>
);
