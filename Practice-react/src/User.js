import React, { memo, useContext } from "react";
import { UserDispatch } from "./App";

function Users({ user }) {
  // useEffect(() => {
  //   console.log("컴포넌트가 화면에 나타남");
  //   console.log("return 전", user);
  //   return () => {
  //     console.log("컴포넌트가 화면에서 사라짐");
  //     console.log("return 후", user);
  //   };
  // }, [user]);
  //deps(배열 안에) 값을 넣으면 상태변화에 따라 리턴을 기준으로 위에값과 아래값이 출력
  //useEffect 안에서 사용하는 상태나, props 가 있다면,
  //useEffect 의 deps 에 넣어주어야 합니다. 그렇게 하는게, 규칙입니다.
  const { id, email, name, active } = user;
  const dispatch = useContext(UserDispatch);
  return (
    <>
      <div>
        <b
          style={{ cursor: "pointer", color: active ? "green" : "black" }}
          onClick={() => {
            dispatch({ type: "TOGGLE_INPUT", id });
          }}
        >
          {name}
        </b>
        ({email})
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_INPUT", idx: id });
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
}

export default memo(Users);
