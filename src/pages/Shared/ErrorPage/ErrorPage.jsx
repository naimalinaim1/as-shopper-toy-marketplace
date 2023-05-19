import { Link } from "react-router-dom";
import errorImage from "../../../assets/error-img.jpg";
import useTitle from "../../../hooks/useTitle";

const ErrorPage = () => {
  // change title
  useTitle("Page Not found");

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <img className="w-[550px]" src={errorImage} alt="" />
      <button className="btn btn-error">
        <Link to="/">Back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
