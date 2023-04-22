import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experience/>
        <div className="h-80 w-full bg-gradient-to-b from-gray-800 to-black"></div>
        <Contact/>
        <div className="h-32 w-full bg-gradient-to-b from-gray-800 to-black"></div>
        <div className="h-32 w-full bg-gradient-to-b from-black to-gray-800"></div>
        <SocialLinks/>
      </div>
  );
}

export default App;
