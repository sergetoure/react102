import { useState } from "react";

function Input() {
  const [username, Setusername] = useState("");
  const handleTextChange = (e) => {
    Setusername((username) => e.target.value);
  };
  return (
    <>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        onInput={handleTextChange}
        value={username}
        placeholder="enter username"
      />
      <h6>{username}</h6>
      <button onClick={() => Setusername((user) => "")}>Reset</button>
    </>
  );
}

export default Input;
