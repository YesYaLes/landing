import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import DescribeBlock from "./components/DescribeBlock";
import InfoBlock from "./components/InfoBlock";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div>
      <Header />
      <DescribeBlock />
      <InfoBlock />
      <Footer />
    </div>
  );
}

export default App;
