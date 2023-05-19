import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const Toy = ({ handleUpdateToy, handleDeleteToy, index, toy }) => {
  const { _id, pictureUrl, name, subCategory, price, rating, quantity } = toy;

  return (
    <>
      <tr>
        <th>{++index}</th>
        <td>
          <LazyLoad>
            <img className="w-24" src={pictureUrl} alt="" />
          </LazyLoad>
        </td>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>{price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td>
          <Link to={`/updateToy/${_id}`} className="btn btn-warning mr-2">
            Update
          </Link>
          <button
            className="btn btn-error"
            onClick={() => handleDeleteToy(_id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Toy;
