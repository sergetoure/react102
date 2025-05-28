import { useRef, useState,useReducer } from "react";

export default function Form() {
  const inputRef = useRef(null);
  const initialState={
    lastName: "Toure",
    firstName: "Serge",
    email: "sergetoure@gmail.com",
  }
  const [form, dispatch] = useState(initialState);
  const focusBtn = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <div>
        <label htmlFor="lastname">last name: </label>
        <input
          ref={inputRef}
          type="text"
          name="lastname"
          value={form.lastName}
          onInput={(e) =>
            dispatch({
             ...form,lastName:e.target.value
            })
          }
        />
      </div>
      <div>
        <label htmlFor="firstname">fisrt name: </label>
        <input
          type="text"
          name="firstname"
          value={form.firstName}
          onInput={(e) =>
            dispatch({
             ...form,firstName:e.target.value
            })
          }
        />
      </div>
      <div>
        <label htmlFor="email">e mail: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onInput={(e) =>
            dispatch({
             ...form,email:e.target.value
            })
          }
        />
      </div>

      <button
        onClick={(e) => {
          console.log(form);
        }}
      >
        submit
      </button>
      <button
        onClick={(e) => {
          focusBtn;
          dispatch({
            lastName: "",
            firstName: "",
            email: ""

          });
        }}
      >
        reset
      </button>
    </>
  );
}
