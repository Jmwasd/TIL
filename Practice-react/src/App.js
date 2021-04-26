import React, { useRef, useState } from "react";
import CreateUser from "./CreateUser";

function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "jang min woo",
      email: "dktkqyd99@gmail.com",
      active: true,
    },
    {
      id: 2,
      name: "min woo jang",
      email: "aksdb9865@naver.com",
      active: false,
    },
    {
      id: 3,
      name: "woo min jang",
      email: "jjangmw@nate.com",
      active: false,
    },
  ]);

  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const nameInput = useRef();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClick = () => {
    const createUser = Object.assign({ id: nextId.current++ }, input, {
      active: false,
    });
    setUsers(users.concat(createUser));
    setInput({
      name: "",
      email: "",
    });
    console.log(input);
    nameInput.current.focus();
  };

  const nextId = useRef(4);

  const deleteUser = (e) => {
    setUsers(
      users.filter((user) => {
        return user.id !== e;
      })
    );
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          return { ...user, active: !user.active };
        }
        return user;
      })
    );
  };

  return (
    <CreateUser
      users={users}
      onChange={onChange}
      onClick={onClick}
      deleteUser={deleteUser}
      onToggle={onToggle}
      nameInput={nameInput}
    />
  );
}

export default App;
