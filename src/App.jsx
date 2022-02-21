import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import "./app.scss"
import Roadmap from "./components/roadmap/Roadmap";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Hero />
        <About />
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
