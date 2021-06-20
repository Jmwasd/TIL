import React from "react";

const profileData = {
  velopert: {
    name: "김민준",
    description: "Frontend Engineer @ AAAAA",
  },
  minwoo: {
    name: "장민우",
    description: "취업하고싶은 풀스택 개발자",
  },
};

function Profile({ match }) {
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </>
  );
}

export default Profile;
