import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContent } from "../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogin, googleLogin } = useContext(AuthContent);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  // change title
  useTitle("Login");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      setError("Password must be 6 character");
      return;
    }

    userLogin(email, password)
      .then(() => {
        // redirect home page
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };

  // handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(from);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="flex justify-center min-h-screen items-center pb-36">
      <div className="card w-full max-w-xl border">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            {/* input filed */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn">Login</button>
            </div>
          </form>

          {/* error */}
          <p className="text-red-500">{error}</p>

          {/* continue with google */}
          <div className="divider">OR</div>
          <div className="flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="flex items-center justify-center bg-white py-2 px-4 border border-gray-300 rounded"
            >
              <img
                src="https://i.ibb.co/P6P8Cfr/google.png"
                alt="Google Logo"
                className="w-4 h-4 mr-2"
              />
              <span className="text-gray-700">Continue with Google</span>
            </button>
          </div>

          {/* go registration page */}
          <p className="text-center text-gray-600">
            Do not have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
