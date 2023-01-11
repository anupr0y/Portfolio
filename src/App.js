import Home from "./component/Home";
import NavBar from "./component/NavBar";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Contact from "./Contact";

import Footer from "./component/Footer";
import SocialLinks from "./component/SocialLinks";

function App() {
  return (
  <>
     <NavBar />
     <Home />
     <About />
     <Portfolio />
     <Experience/>
     <Contact />
     <Footer />

     <SocialLinks />
  </>
  );
}

export default App;
