import UserList from "@/components/UserList";
import CreateUserForm from "@components/CreateUserForm"


export default function Home() {
  return (
    <div style={{ display: "flex", gap: "20px", flexDirection: "row", padding: "20px" }}>
      <div className="user-container" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "500px", backgroundColor: "#edede9", padding: "10px", borderRadius: "8px" }}>
        <CreateUserForm/>
        <UserList/>
      </div>
      <div className="project-container" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "500px", backgroundColor: "#f0efeb", padding: "10px", borderRadius: "8px" }}>
        test
      </div>
    </div>
  );
}
