import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    email: "",
    nickName: "",
  });

  const nameInput = useRef();

  const { email, nickName } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      email: "",
      nickName: "",
    });
    nameInput.current.focus();
  };

  return (
    <>
      <input
        name="email"
        placeholder="email"
        onChange={onChange}
        value={email}
        ref={nameInput}
      />
      <input
        name="nickName"
        placeholder="nickName"
        onChange={onChange}
        value={nickName}
      />
      <button onClick={onReset}>등록</button>
      <h1>
        값 : {email}({nickName})
      </h1>
    </>
  );
}

export default InputSample;
