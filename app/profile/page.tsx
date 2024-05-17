import React from "react";
import { options } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

const Profile = async () => {
  const session = await getServerSession(options);
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>
        <h3>User:{session?.user?.name} </h3>
        <h3>data:{session?.user?.email} </h3>
      </div>
    </div>
  );
};

export default Profile;
