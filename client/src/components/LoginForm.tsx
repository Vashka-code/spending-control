import { useEffect, useState } from "react";
import {
  login,
  registrarion,
  checkAuth,
  logout,
} from "../store/storeAsyncThunk";
import { useDispatch, useSelector } from "react-redux";
import { UserInterface } from "../types/response/UserI";
import UserServise from "../services/UserService";
import { setUser } from "../store/storeSlice";

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [users, setUsers] = useState<UserInterface[]>([]);
  const dispatch = useDispatch();
  // @ts-ignore
  const { isAuth, user } = useSelector((state) => state.user);

  console.log(users);

  async function getAllUsers() {
    try {
      const response = await UserServise.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // TODO: token in constants
    if (localStorage.getItem("token")) {
      // @ts-ignore
      dispatch(checkAuth());
    }
  }, []);

  // TODO: fix @ts-ignore in component
  return (
    <div>
      <h1>
        {isAuth ? `Пользователь авторизован ${user.email}` : "Введите логин"}
      </h1>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name="email"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        placeholder="Password"
      />
      {/* TODO: check why login is not wowking */}
      {/* @ts-ignore */}
      <button onClick={() => dispatch(login({ email, password }))}>
        Login
      </button>
      {/* @ts-ignore */}
      <button onClick={() => dispatch(registrarion({ email, password }))}>
        Registration
      </button>
      {/* @ts-ignore */}
      <button onClick={() => dispatch(logout())}>Logout</button>
      {/* @ts-ignore */}
      <button onClick={() => getAllUsers()}>get users</button>
    </div>
  );
}

export default LoginForm;
