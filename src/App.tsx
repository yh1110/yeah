import { Provider } from "react-redux";
import { Home } from "./components/pages/Home";
import { UIProvider } from "@yamada-ui/react";
import { store } from "./store/store";
import { Profile } from "./components/pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<div />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </Provider>
  );
}

export default App;
