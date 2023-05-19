import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContent } from "../AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateUser } = useContext(AuthContent);
  const navigate = useNavigate();
  // change title
  useTitle("Register");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (password.length < 6) {
      setError("Password must be 6 character");
      return;
    }

    createUser(email, password)
      .then(() => {
        updateUser(name, photoUrl)
          .then(() => {
            // redirect home page
            navigate("/");
          })
          .catch((err) => setError(err.message));
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div className="flex justify-center min-h-screen items-center pb-36">
      <div className="card w-full max-w-xl border">
        <form className="card-body" onSubmit={handleRegister}>
          {/* input filed */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="email"
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="url"
              name="photoUrl"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn">Register</button>
          </div>

          {/* error */}
          <p className="text-red-500">{error}</p>

          {/* continue with google */}
          <div className="divider">OR</div>

          {/* go registration page */}
          <p className="text-center text-gray-600">
            All Ready have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
