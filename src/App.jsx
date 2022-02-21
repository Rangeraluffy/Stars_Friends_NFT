import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import "./app.scss"
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Discord from "./components/discord/Discord";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
        <Navbar />
        <Hero />
        <About />
        <Roadmap />
        <Team />
        <Discord />
        <Footer />
    </div>
  );
}

export default App;
