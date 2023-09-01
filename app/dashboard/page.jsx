import { getServerSession } from "next-auth";
import "@/app/globals.css";
const Dashboard = async () => {
    const session = await getServerSession()
  return (
    <div className="center">
        {session.user.name && <h3>Welcome, {session.user.name}</h3>}
    </div>
  );
};

export default Dashboard;
