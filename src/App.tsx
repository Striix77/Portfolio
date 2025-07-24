import "./App.css";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import LiquidFilter from "./components/LiquidFilter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="main-div">
      <Background />
      <LiquidFilter />
      <Navbar />
      <div className="content">
        <Hero />
      </div>
    </div>
  );
}

export default App;
