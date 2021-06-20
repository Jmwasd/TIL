import React, { useEffect, useState, memo } from "react";
import Users from "./User";

function UserList({ users }) {
  return (
    <>
      {users.map((user) => {
        return <Users user={user} key={user.id} />;
      })}
    </>
  );
}

export default memo(UserList);
