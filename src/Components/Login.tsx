import React, { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [userName, setUsername] = useState<string>("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);

  return (
    <div>
      <h1>Login Page</h1>
      <h2>{username}</h2>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUsername(e.target.value)
        }
      />
      <button onClick={() => dispatch(login({ username: userName }))}>
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
