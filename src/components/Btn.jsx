import { useState } from "react";
export default function Btn() {
  const [label, setLabel] = useState("Click Me");
  const btnHandler = (e) => {
    const listLabel = ["Click Me", "Let's Go", "Touch Me!"];
    const labelIndex = Math.floor(Math.random() * listLabel.length);
    setLabel((label) => listLabel[labelIndex]);
  };

  const btnStyle = {
    //display: "block",
  };
  return (
    <>
      <button onClick={btnHandler} style={btnStyle}>
        {label}
      </button>
    </>
  );
}
