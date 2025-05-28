import { useGlobalStateContext } from "../provider/GlobalStateProvider";
const User = () => {
  const {globalState}=useGlobalStateContext()
  const userStyling = {
    fontSize: "30px",
    color: "",
    fontFamily: "Arial",
    fontWeight: "900",
  };
  const { lastName, firstName, date, country,email } = globalState;
  return (
    <>
      <span
        style={userStyling}
      >{`${firstName} ${lastName.toUpperCase()}`}</span>
      <span className="date">{date}</span>
      <div>{country}</div>
      <div>{email}</div>
    </>
  );
};

export default User;
