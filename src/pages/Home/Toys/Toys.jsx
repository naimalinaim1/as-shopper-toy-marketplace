import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContent } from "../../../system/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

// eslint-disable-next-line react/prop-types
const Toys = ({ toy }) => {
  AOS.init();

  const { user } = useContext(AuthContent);
  const [toys, setToys] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://toy-car-sport-server.vercel.app/toys?subCategory=${toy}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [toy]);

  // handle toy details
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

  const aos = [
    "flip-right",
    "zoom-out",
    "fade-up-left",
    "zoom-out",
    "zoom-out-down",
    "flip-left",
    "flip-left",
    "fade-up-right",
    "fade-left",
    "zoom-in",
    "zoom-in-down",
    "fade-up-left",
  ];

  return (
    <>
      <div className="space-y-5 sm:space-y-0  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-10">
        {toys?.map((toyItem, idx) => (
          <div key={idx} className="card card-compact  bg-base-100 shadow-xl">
            <figure className="h-[230px]">
              <img
                data-aos={aos[idx]}
                className="sm:w-[80%] mx-auto"
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
                <button
                  className="btn"
                  onClick={() => handleToyDetail(`/toy/${toyItem?._id}`)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Toys;
