import React from "react";
import UserList from "./UserList";

function CreateUser({
  email,
  nickname,
  onChange,
  onClick,
  users,
  deleteUser,
  nameInput,
  onToggle,
}) {
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
        name="name"
        placeholder="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onClick}>등록 버튼</button>
      <UserList users={users} deleteUser={deleteUser} onToggle={onToggle} />
    </>
  );
}

export default CreateUser;
