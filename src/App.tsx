import "./App.css";
import About from "./components/About/About";
import Background from "./components/Background/Background";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import LiquidFilter from "./components/LiquidFilter";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <div className="main-div">
        <LiquidFilter />
        <Background />
        <Navbar />
        <div className="content">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Erik. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
