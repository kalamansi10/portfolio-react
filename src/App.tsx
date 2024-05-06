import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import "./App.css";

const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ReachOut = lazy(() => import("./pages/ReachOut"));

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <div className="pages">
          <Routes>
            <Route
              index
              element={
                <Suspense>
                  <Hero />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/projects"
              element={
                <Suspense>
                  <Projects />
                </Suspense>
              }
            />
            <Route
              path="/reach-out"
              element={
                <Suspense>
                  <ReachOut />
                </Suspense>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
