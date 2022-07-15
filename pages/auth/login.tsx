import { Preview } from "@mui/icons-material";
import { NextPage } from "next";
import React, { useState } from "react";
import {
  useLoginMutation,
  useLogoutMutation,
  useUserAccountsQuery,
  User,
} from "../../graphql/generated/graphql";

const Login: NextPage = () => {
  const [loginInput, setLoginInput] = useState({ password: "", email: "" });
  const [user, setUser] = useState<User | null>(null);
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();
  const { data, error } = useUserAccountsQuery();

  const handleSubmit = async (event: any) => {
    event?.preventDefault();
    try {
      const resp = await login({
        variables: {
          authInput: {
            password: loginInput.password,
            email: loginInput.email,
          },
        },
      });
      if (resp) {
        setUser(resp.data?.login.user as User);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  const handleLogout = async (event: any) => {
    try {
      const resp = await logout();
      if (resp) {
        console.log(resp.data?.logout);
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = async (event: any) => {
    let value = event.target.value;
    setLoginInput((prev) => {
      return { ...prev, [event.target.name]: value };
    });
  };
  console.log(user);
  if (error) return<p>Error...</p>;
  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          name="email"
          id="LoginEmail"
          value={loginInput.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="Email">Password</label>
        <input
          type="password"
          name="password"
          value={loginInput.password}
          id="LoginPassword"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
      </form>
      {user ? (
        <div>
          <h2>{user.email}</h2>
          <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>
      ) : (
        <p>Not Connected</p>
      )}
      {data ? (
        data.accountsUser.map((elem, key) => (
          <div key={key}>
            <h2>{elem.name}</h2>
          </div>
        ))
      ) : (
        <p>Not Connected</p>
      )}
    </div>
  );
};

export default Login;
