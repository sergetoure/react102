
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Country from "./components/Country";
import User from "./components/User";
import Score from "./components/Score";
import logo from "./assets/logo.jpg";
import Btn from "./components/Btn";
import Cite from "./components/Cite";
import Input from "./components/Input";

function App() {
  
  let stateData = {
    lastName: "toure",
    firstName: "Serge",
    date: "05/31/1985",
    country: "Senegal",
    capitale: "Dakar",
    score: 87,
    children: <Cite author="Serge Toure" desc="Description here" />,
  };

  return (
    <>
      <div>
        <img src={logo} alt="logo" width="100px" style={{ display: "block" }} />
      </div>
      <div className="leader">
        <div>
          <User params={stateData} />
        </div>
        <div>
          <Country country={stateData.country} capitale={stateData.capitale} />
        </div>
        <div>
          <Score score={stateData.score} />
        </div>
      </div>
      <div>
        <Btn />
      </div>
      <div>{stateData.children}</div>
      <div>
        <Input />
      </div>
    </>
  );
}

export default App;
