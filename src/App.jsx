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
import Form from "./components/Form";
import CounterList from "./components/CounterList";
import Counter from "./components/Counter"
import GlobalStateProvider from "./provider/GlobalStateProvider";
import { useState } from "react";

function App() {
  // const [userData, setUserData] = useState({
  //   lastName: "toure",
  //   firstName: "Serge",
  //   date: "05/31/1985",
  //   country: "Senegal",
  //   capitale: "Dakar",
  //   score: 87,
  //   children: <Cite author="Serge Toure" desc="Description here" />,
  //   counterList:[]
  // });

  return (
    <>
    <GlobalStateProvider>

  
        <div>
        <img src={logo} alt="logo" width="100px" style={{ display: "block" }} />
      </div>
      <div className="leader">
        <div>
          <User/>
        </div>
        <div>
          <Country />
        </div>
        <div>
          <Score/>
        </div>
      </div>
      <div>
      <Cite/>
      </div>
      <div>
        <Btn />
      </div>
     
      <div>
        <Input />
      </div>
      <div>
        <Form />
      </div>
      <div>
        <button
          // onClick={() =>
          //   setUserData({
          //     lastName: "kone",
          //     firstName: "Karim",
          //     date: "05/31/1990",
          //     country: "Ghana",
          //     capitale: "Accra",
          //     score: 45,
          //     children: <Cite author="kone karim" desc="Description here" />,
          //   })
          // }
        >
          Update state
        </button>
      </div>
      <div>
        <CounterList />
        <Counter />
      </div>
     
      </GlobalStateProvider>
     
    </>
   
    
  );
}

export default App;
