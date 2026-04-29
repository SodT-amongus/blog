import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { SignUp } from "./pages/SignUp";
import { Error } from "./pages/error";
import { Contact } from "./pages/Contact";
import { Blogs } from "./pages/Blogs";
import { BlogPage } from "./pages/Blog";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/404" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
      </Routes>
    </BrowserRouter>
  );
};
