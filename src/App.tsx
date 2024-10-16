import { Provider } from "react-redux";
import { Home } from "./components/pages/Home";
import { UIProvider } from "@yamada-ui/react";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <UIProvider>
        <Home></Home>
      </UIProvider>
    </Provider>
  );
}

export default App;
