import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=10`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);

        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
        setUsers([]);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }
  return (
    <div>
      <h2> ==Userlist==</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <i className="text-red-700 my-6 text-2xl">{user.name}</i>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
