'use client'

import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "@lib/reactQueries";

const UserList = () => {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
  
  if (isLoading)
    return <div>Chargement...</div>;
  if (error) return <div>Erreur lors du chargement</div>;

  return (
    <ul>
    {users.map((user: any) => (
      <li key={user.id}>
      {user.firstName} {user.lastName} ({user.gitUsername})
      </li>
    ))}
    </ul>
  );
}
export default UserList;