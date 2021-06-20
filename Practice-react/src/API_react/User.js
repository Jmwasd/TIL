import React, { useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

async function getUsers(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}

function User({ id }) {
  const [state] = useAsync(() => getUsers(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!user) return null;

  return (
    <>
      <h1>{user.username}</h1>
      <p>
        <b>Email : </b>
        {user.email}
      </p>
    </>
  );
}
export default User;