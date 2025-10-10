import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-[#222428] min-h-screen">
        <Nav />
      </div>
    </>
  );
}

export default App;
