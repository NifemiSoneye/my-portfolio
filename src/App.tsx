import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="bg-[#222428] min-h-screen">
        <Nav />
        <Home />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;
