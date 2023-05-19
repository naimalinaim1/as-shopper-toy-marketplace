import { useLoaderData } from "react-router-dom";
import useTitle from "../../../hooks/useTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const [toy] = useLoaderData();
  // change title
  useTitle(`Update Toy ${toy?.name}`);

  const handleUpdateToy = (updateToy) => {
    fetch("https://toy-car-sport-server.vercel.app/toys", {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          Swal.fire("Success!", "Toy Update successfully", "success");
        }
      });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    handleUpdateToy({ _id: toy._id, price, quantity, description });
  };

  return (
    <div className="w-[70%] mt-10 mb-28 mx-auto shadow-xl p-4 rounded-xl">
      <h3 className="font-bold text-lg">Update Toys: {toy?.name}</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            defaultValue={toy?.price}
            name="price"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="quantity" className="block mb-2">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            defaultValue={toy?.quantity}
            name="quantity"
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-2">
            Details Description
          </label>
          <textarea
            id="description"
            defaultValue={toy?.description}
            name="description"
            className="w-full border p-2 rounded"
          ></textarea>
        </div>
        <input type="submit" value="Update" className="btn btn-warning" />
      </form>
    </div>
  );
};

export default UpdateToy;
