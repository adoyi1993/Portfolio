import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio /><br/> <br/><br/>
      <Experience /> <br/><br/><br/>
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
