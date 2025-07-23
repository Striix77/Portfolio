import "./App.css";
import Hero from "./components/Hero/Hero";
import LiquidFilter from "./components/LiquidFilter";
import Navbar from "./components/Navbar/Navbar";
import "./components/ui/button";
function App() {
  return (
    <div className="main-div">
      <LiquidFilter />
      <Navbar />
      <div className="content">
        <Hero />
      </div>
    </div>
  );
}

export default App;
