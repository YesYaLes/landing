import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div className="p-4">
      <Header />
    </div>
  );
}

export default App;
