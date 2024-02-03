import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Contexts/AuthContext";

export default function Login() {
  const { setLoggedIn } = useAuthContext();
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function handleLogin(e) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      alert("Email or Password is in-valid");
    } else {
      fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          if (result && result.success) {
            try {
              setLoggedIn(true);
              sessionStorage.setItem("_tk", result.token);
              navigate("/dashboard");
            } catch (error) {
              console.log("Error storing token", error);
            }
          }
        })
        .catch((error) => console.log(error));
    }
  }

  return (
    <div className="container text-start">
      <div className="card" style={{ padding: "1em", width: "350px" }}>
        <div className="card-body">
          <h3 className="mb-3">Login</h3>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              ref={emailRef}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*************"
              ref={passwordRef}
            />
          </div>
          <div className="d-grid">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
