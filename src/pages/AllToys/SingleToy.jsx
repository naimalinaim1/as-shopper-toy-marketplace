/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const { _id, pictureUrl, name, sellerName, subCategory, price, quantity } =
    toy;
  return (
    <tr>
      <td>
        <img className="w-24" src={pictureUrl} alt="" />
      </td>
      <td>{name}</td>
      <td>{sellerName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toy/${_id}`} className="btn btn-warning mr-2">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default SingleToy;
