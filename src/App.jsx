import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";

import Contact from "./Components/contact/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Contact></Contact>
    </div>
  );
}

export default App;
