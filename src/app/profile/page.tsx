import { unauthorized } from "next/navigation";
import React from "react";

const Profile = async () => {
  const isAuthorized = false;

  if (!isAuthorized) {
    unauthorized();
  }

  return <div>Profile</div>;
};

export default Profile;
