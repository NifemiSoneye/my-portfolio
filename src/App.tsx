import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <div className="bg-[#222428] min-h-screen">
        <Nav />
        <Home />
        <About />
      </div>
    </>
  );
}

export default App;
