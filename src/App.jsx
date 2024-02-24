import "./App.css";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Header from "./component/Header/Header";
import Navbar from "./component/Nav/Navbar";
import Projects from "./component/Projects/Projects";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
