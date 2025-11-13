import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="bg-[#222428] min-h-screen">
        <Nav />
        <Home />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;
