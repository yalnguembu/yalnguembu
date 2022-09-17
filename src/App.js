import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Blog from "./Components/Blog/Blog";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import NotFound from "./Components/NotFound/NotFound";
import Dashboard from "./Components/Dashboard";
import About from "./Components/Dashboard/About/About";
import Skill from "./Components/Dashboard/Skill/Skill";
import Blogd from "./Components/Dashboard/Blog/Blog";
import Projet from "./Components/Dashboard/Projet/Projet";
import Calculator from "./Projets/Caculator/Calculator";
import ChatApp from "./Projets/ChatApp/ChatApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Home />
              <Footer />
            </div>
          }
        />
        <Route path="projects">
          <Route index element={<script>windows.href.location="/";</script>} />
          <Route path="chatapp" element={<ChatApp />} />
          <Route path="calculator" element={<Calculator />} />
          <Route path="blog" element={<Blog />} />
        </Route>
        <Route path="dashboard">
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skill />} />
          <Route path="projet" element={<Projet />} />
          <Route path="blog" element={<Blogd />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
