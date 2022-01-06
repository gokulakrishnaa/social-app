import "./Login.css";
import { useContext, useRef } from "react";
import { LoginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from "@mui/material/CircularProgress";

export function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    LoginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
    console.log(user);
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">React Social</h3>
          <span className="loginDesc">
            Connect with friends and world around you on React Social
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              className="loginInput"
              type="email"
              required
              placeholder="Email"
              ref={email}
            />
            <input
              className="loginInput"
              type="password"
              required
              minLength="6"
              placeholder="Password"
              ref={password}
            />
            <button className="loginButton" type="submit">
              {isFetching ? <CircularProgress size="10px" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password ?</span>
            <button className="loginRegisterButton" type="submit">
              {isFetching ? (
                <CircularProgress size="10px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
