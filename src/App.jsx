import "./App.css";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Header from "./component/Header/Header";
import Navbar from "./component/Nav/Navbar";
import Projects from "./component/Projects/Projects";
import Testimonial from "./component/Testimonial/Testimonial";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Testimonial />
      <Contact />
    </>
  );
}

export default App;
