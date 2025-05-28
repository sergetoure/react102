import { useRef, useState } from "react";

export default function Form() {
  const inputRef = useRef(null);
  const [form, setFormData] = useState({
    lastName: "Toure",
    firstName: "Serge",
    email: "sergetoure@gmail.com",
  });
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
            setFormData({
              ...form,
              lastName: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="firstname">last name: </label>
        <input
          type="text"
          name="firstname"
          value={form.firstName}
          onInput={(e) =>
            setFormData({
              ...form,
              firstName: e.target.value,
            })
          }
        />
      </div>
      <div>
        <label htmlFor="email">last name: </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onInput={(e) =>
            setFormData({
              ...form,
              email: e.target.value,
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
          setFormData({ lastName: "", firstName: "", email: "" });
        }}
      >
        reset
      </button>
    </>
  );
}
