import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Error } from "./pages/error";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
        <Route path="/404" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
