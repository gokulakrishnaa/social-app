import "./Register.css";
import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("Passwords don't Match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post(
          "https://node-rtsocial.herokuapp.com/api/auth/register",
          user
        );
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
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
              required
              ref={username}
              placeholder="Username"
            />
            <input
              className="loginInput"
              required
              ref={email}
              placeholder="Email"
              type="email"
            />
            <input
              className="loginInput"
              required
              ref={password}
              placeholder="Password"
              type="password"
            />
            <input
              className="loginInput"
              required
              ref={passwordAgain}
              placeholder="Password Again"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button
              className="loginRegisterButton"
              onClick={() => {
                history.push("/login");
              }}
            >
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
