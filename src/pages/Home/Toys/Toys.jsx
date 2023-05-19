import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Toys = ({ toy }) => {
  const [toys, setToys] = useState();

  useEffect(() => {
    fetch(`http://localhost:3000/toys?subCategory=${toy}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toy]);

  return (
    <>
      <div className="grid grid-cols-4 gap-4 my-10">
        {toys?.map((toyItem, idx) => (
          <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-[80%] mx-auto"
                src={toyItem?.pictureUrl}
                alt=""
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toyItem?.name}</h2>
              <p>Price: ${toyItem?.price}</p>
              <p>Ratting: {toyItem?.rating}</p>
              <p>SubCategory: {toyItem?.subCategory}</p>
              <div className="card-actions justify-end">
                <Link to={`/toy/${toyItem?._id}`} className="btn">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toys;
