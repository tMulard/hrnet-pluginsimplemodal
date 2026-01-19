import { useState } from "react";
import "./App.css";
import Modale from "./components/Modale/Modale";

function App() {
  const [isHidden, setIsHidden] = useState(true);

  const handleClick = () => { setIsHidden(!isHidden);};

  return (
    <>
      <button className="modaleBtn" onClick={handleClick}>
        Modal
      </button>
      
      <Modale isHidden={isHidden} isHiddenCross={false} handleClick={handleClick}>
        <h1>Bonjour</h1>
      </Modale>
    </>
  );
}

export default App;
