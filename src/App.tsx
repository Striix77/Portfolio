import "./App.css";
import LiquidFilter from "./components/LiquidFilter";
import Navbar from "./components/Navbar";
import "./components/ui/button";
function App() {
  return (
    <div className="main-div">
      <LiquidFilter />
      <Navbar />
      <div className="content"></div>
    </div>
  );
}

export default App;
