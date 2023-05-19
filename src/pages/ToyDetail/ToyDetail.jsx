import { useLoaderData } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import useTitle from "../../hooks/useTitle";

const ToyDetail = () => {
  AOS.init();
  const [toyItem] = useLoaderData();
  const aos = [
    "fade-left",
    "fade-up-left",
    "fade-up-right",
    "fade-up",
    "zoom-out",
    "zoom-out-up",
    "zoom-out-down",
    "flip-up",
    "flip-right",
    "flip-left",
    "zoom-in",
    "zoom-in-down",
  ];

  // change title
  useTitle(`Toy Details ${toyItem?.name}`);

  return (
    <div className="p-6 w-[80%] mx-auto my-10 card card-compact  bg-base-100 shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-4">
        Toy Name: {toyItem?.name}
      </h2>
      <figure data-aos={aos[Math.floor(Math.random() * (aos.length - 1))]}>
        <img src={toyItem?.pictureUrl} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyItem?.name}</h2>
        <p>Seller Name: {toyItem?.sellerName}</p>
        <p>Seller Email: {toyItem?.sellerEmail}</p>
        <p>Price: ${toyItem?.price}</p>
        <p>Ratting: {toyItem?.rating}</p>
        <p>Available Quantity: {toyItem?.quantity}</p>
        <p>Details: {toyItem?.description}</p>
      </div>
    </div>
  );
};

export default ToyDetail;
