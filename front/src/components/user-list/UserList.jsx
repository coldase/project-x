const UserList = ({ users }) => {
  return (
    <div className="absolute ">
      {users.map((user) => (
        <p key={user.id}>{user.username}</p>
      ))}
    </div>
  );
};

export default UserList;
