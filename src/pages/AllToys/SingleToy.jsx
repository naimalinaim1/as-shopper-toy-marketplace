/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContent } from "../../system/AuthProvider/AuthProvider";

const SingleToy = ({ toy, index }) => {
  const { _id, pictureUrl, name, sellerName, subCategory, price, quantity } =
    toy;
  const { user } = useContext(AuthContent);
  const navigate = useNavigate();

  const handleToyDetail = (path) => {
    if (user?.email) {
      navigate(path);
    } else {
      Swal.fire({
        title: "Please login",
        text: "You have to log in first to view details",
        icon: "error",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: path } });
        }
      });
    }
  };
  return (
    <tr>
      <td>{++index}</td>
      <td>
        <img className="w-24" src={pictureUrl} alt="" />
      </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <button
          onClick={() => handleToyDetail(`/toy/${_id}`)}
          className="btn btn-warning mr-2"
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default SingleToy;
