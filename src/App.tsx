import { Provider } from "react-redux";
import { Home } from "./components/pages/Home";
import { UIProvider } from "@yamada-ui/react";
import { store } from "./store/store";
import { Profile } from "./components/pages/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/pages/Activities";

function App() {
  return (
    <Provider store={store}>
      <UIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="*" element={<div />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </Provider>
  );
}

export default App;
