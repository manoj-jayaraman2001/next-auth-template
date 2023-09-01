import { getServerSession } from "next-auth";

const ProtectedServer = async () => {
    const session = await getServerSession()
    
  return (
    <div className="center">
      <h4>This is Protected Server Page</h4>
      <p>Ypo are logged in as:<strong>{session.user.name}</strong></p>
    </div>
  );
};

export default ProtectedServer;
