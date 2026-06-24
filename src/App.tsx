import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Training from "./Components/Training";
import Contact from "./Components/Contact";
import JoinCohort from "./Components/JoinCohort";



function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/"  element={<Home />} />
        <Route path="/About"  element={<About />} />
        <Route path="/Training"  element={<Training />} />
        <Route path="/Contact"  element={<Contact />} />
        <Route path="/JoinCohort"  element={<JoinCohort />} />
        
        


      </Routes>

    </BrowserRouter>
  );
}

export default App;