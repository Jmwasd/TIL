import React, { useMemo, useReducer, createContext } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function activeUsers(users) {
  let count = 0;
  users.map((user) => {
    if (user.active) {
      count++;
    }
  });
  return count;
}

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case "CREATE_INPUT":
      return {
        inputs: {
          name: "",
          email: "",
        },
        users: state.users.concat(action.newUser),
      };
    case "REMOVE_INPUT":
      console.log("real", action.idx);
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.idx),
      };

    case "TOGGLE_INPUT":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.id) {
            return {
              ...user,
              active: !user.active,
            };
          } else {
            return user;
          }
        }),
      };

    default:
      return state;
  }
}

export const UserDispatch = createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, {
    inputs: {
      name: "",
      email: "",
    },
    users: [
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
    ],
  });

  const { inputs, users } = state;

  const count = useMemo(() => {
    return activeUsers(users);
  }, [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser users={users} inputs={inputs} />
      <UserList users={users} />
      <div>활성사용자 수 : {count} </div>
    </UserDispatch.Provider>
  );
}

export default App;
