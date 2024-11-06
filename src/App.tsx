import { Provider } from "react-redux";
import { Home } from "./components/pages/desktop/Home";
import { UIProvider } from "@yamada-ui/react";
import { store } from "./store/store";
import { Profile } from "./components/pages/desktop/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/pages/desktop/Activities";
import { Signin } from "./components/pages/auth/Signin";
import { Signup } from "./components/pages/auth/Signup";
import theme from "./theme";

function App() {
  return (
    <Provider store={store}>
      <UIProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<div />} />
          </Routes>
        </BrowserRouter>
      </UIProvider>
    </Provider>
  );
}

export default App;
