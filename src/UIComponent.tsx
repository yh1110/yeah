import { UIProvider } from "@yamada-ui/react";
import { lazy, Suspense } from "react";
import { LoadingPage } from "./components/pages/loading/LoadingPage";
import theme from "./theme/index.ts";

const App = lazy(() => import("./App.tsx")); //遅延レンダリングs

function UIComponent() {
  return (
    <UIProvider theme={theme}>
      <Suspense fallback={<LoadingPage />}>
        <App />
      </Suspense>
    </UIProvider>
  );
}

export default UIComponent;
