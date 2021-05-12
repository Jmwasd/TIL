import React, { memo, useContext, useRef } from "react";
import { UserDispatch } from "./App";

function CreateUser({ inputs }) {
  const { name, email } = inputs;
  const dispatch = useContext(UserDispatch);
  const nextId = useRef(4);
  const nameInput = useRef();
  return (
    <>
      <input
        name="email"
        placeholder="email"
        onChange={(e) => {
          const { name, value } = e.target;
          dispatch({ type: "CHANGE_INPUT", name, value });
        }}
        value={email}
        ref={nameInput}
      />
      <input
        name="name"
        placeholder="nickname"
        onChange={(e) => {
          const { name, value } = e.target;
          dispatch({ type: "CHANGE_INPUT", name, value });
        }}
        value={name}
      />
      <button
        onClick={() => {
          const newUser = Object.assign({ id: nextId.current++ }, inputs, {
            active: false,
          });
          dispatch({ type: "CREATE_INPUT", newUser });
          nameInput.current.focus();
        }}
      >
        등록 버튼
      </button>
    </>
  );
}

export default memo(CreateUser);
