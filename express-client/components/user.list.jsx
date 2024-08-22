import UserRow from "./user-row";
import UserHead from "./user-head";
import { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState();
  const getEmployeesData = async () => {
    const res = await fetch("http://localhost:8000/users");
    const { users } = await res.json();
    setUsers(users);
  };

  const createEmployee = async () => {
    const res = await fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: "Нарантунгалаг",
        lastname: "Даваа",
        email: "naraa@gmail.com",
        position: "Хөгжүүлэгч",
        profileImg: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      }),
    });
    const { user } = await res.json();
    console.log("AE", user);
  };

  useEffect(() => {
    getEmployeesData();
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <UserHead />
        <tbody>
          {users?.map((user) => (
            <UserRow user={user} />
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn btn-info btn-outline" onClick={createEmployee}>
          Ажилтан нэмэх
        </button>
      </div>
    </div>
  );
};

export default UserList;
