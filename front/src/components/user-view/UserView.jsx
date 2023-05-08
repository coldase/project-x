import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserList from "../user-list/UserList";

const URL = "https://jsonplaceholder.typicode.com/users";

const UserView = () => {
  const [users, setUsers] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      setUsers(data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3">
        <div></div>
        <div className=" bg-slate-400 pl-20">HERRO {username}-san!</div>
        <div>
          <UserList users={users} />
        </div>
      </div>
    </>
  );
};

export default UserView;
