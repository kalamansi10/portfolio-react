import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ReachOut from "./pages/ReachOut";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/reach-out" element={<ReachOut />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
