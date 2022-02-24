import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import "./app.scss";
import Roadmap from "./components/roadmap/Roadmap";
import Team from "./components/team/Team";
import Discord from "./components/discord/Discord";
import Footer from "./components/footer/Footer";
import ReactGA from "react-ga";

const TRACKING_ID = `${process.env.GA_KEY}`;
ReactGA.initialize(TRACKING_ID);

ReactGA.event({
  category: "User",
  action: "Created an Account",
});

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
