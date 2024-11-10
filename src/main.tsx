import { lazy, StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import "./css/index.css";
import { UIProvider } from "@yamada-ui/react";
import theme from "./theme/index.ts";
import { LoadingPage } from "./components/pages/loading/LoadingPage.tsx";
const App = lazy(() => import("./App.tsx"));
ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UIProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </UIProvider>
  </StrictMode>
);
