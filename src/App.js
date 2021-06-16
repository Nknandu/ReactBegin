import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/tobar/topbar";
import Work from "./components/works/works";


function App() {
  return (
    <div className="App">
      <Topbar />
      
      <div className="section">
      <Intro/>
      <Portfolio/>
      <Work/>
      <Testimonials/>
      <Contact/>
      </div>
    </div>
  );
}

export default App;
