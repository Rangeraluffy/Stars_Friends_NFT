import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import "./app.scss"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
