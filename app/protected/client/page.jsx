"use client";
import { useSession } from "next-auth/react";
// import '@/app/globals.css'
const ProtectedClient = () => {
  const { data, status } = useSession();

  if (status === "loading")
    return (
      <div className="center">
        <p>Loading</p>
      </div>
    );
  return (
    <div className="center">
      <h4>This is Protected Client Page</h4>
      <p>
        You are logged in as: <strong>{data?.user?.name}</strong>
      </p>
    </div>
  );
};

export default ProtectedClient;
