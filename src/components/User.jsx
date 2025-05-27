const User = ({ params }) => {
  const userStyling = {
    fontSize: "30px",
    color: "",
    fontFamily: "Arial",
    fontWeight: "900",
  };
  const { lastName, firstName, date, country } = params;
  return (
    <>
      <span
        style={userStyling}
      >{`${firstName} ${lastName.toUpperCase()}`}</span>
      <span className="date">{date}</span>
      <div>{country}</div>
    </>
  );
};

export default User;
