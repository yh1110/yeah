import { Provider } from "react-redux";
import { Home } from "./components/pages/main/Home";
import { store } from "./store/store";
import { Profile } from "./components/pages/main/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Activities } from "./components/pages/main/Activities";
import { Signin } from "./components/pages/auth/Signin";
import { Signup } from "./components/pages/auth/Signup";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
