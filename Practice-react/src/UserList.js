import React, { useEffect, useState } from "react";
import Users from "./User";

function UserList({ users, deleteUser, onToggle }) {
  return (
    <>
      {users.map((user) => {
        return (
          <Users
            user={user}
            deleteUser={deleteUser}
            onToggle={onToggle}
            key={user.id}
          />
        );
      })}
    </>
  );
}

export default UserList;
