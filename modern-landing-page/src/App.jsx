import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import "./index.css";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;