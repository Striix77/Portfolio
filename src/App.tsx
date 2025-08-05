import "./App.css";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import LiquidFilter from "./components/LiquidFilter";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="main-div">
      <Background />
      <LiquidFilter />
      <Navbar />
      <div className="content">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
