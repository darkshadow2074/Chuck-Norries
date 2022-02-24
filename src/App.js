import React, { useState } from "react";

import "./App.css";
import JokeCategory from "./components/JokeCategory";
import WelcomeScreen from "./components/WelcomeScreen";

function App() {
  const [showCategory, setShowCategory] = useState(false);
  return (
    <div className="App">
      {!showCategory && <WelcomeScreen setShowCategory={setShowCategory} />}
      {showCategory && <JokeCategory />}
    </div>
  );
}

export default App;
