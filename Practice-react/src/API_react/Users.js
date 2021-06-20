import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, [], true);
  const [userId, setUserId] = useState(null);
  const { data, loading, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!data) return <button onClick={refetch}>불러오기</button>;

  return (
    <>
      <ul>
        {data.map((user) => (
          <li
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
            key={user.id}
          >
            {user.username}({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
