import { useContext, useState } from "react";
import { AuthContent } from "../../system/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddToys = () => {
  const { user } = useContext(AuthContent);

  const sellerName = user?.displayName || "";
  const sellerEmail = user?.email || "";

  const [formData, setFormData] = useState({
    pictureUrl: "",
    name: "",
    sellerName,
    sellerEmail,
    subCategory: "",
    price: "",
    rating: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // toy data send server
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          e.target.reset();
          setFormData({
            pictureUrl: "",
            name: "",
            sellerName,
            sellerEmail,
            subCategory: "",
            price: "",
            rating: "",
            quantity: "",
            description: "",
          });
          Swal.fire("Success!", "Toy added successfully", "success");
        } else {
          Swal.fire("Error!", "Toy added Filed", "error");
        }
      });
  };

  return (
    <div className="w-[70%] mt-10 mb-28 mx-auto shadow-xl p-4 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Product Details</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="pictureUrl" className="block mb-2">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            value={formData.pictureUrl}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="name" className="block mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="sellerName" className="block mb-2">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={formData.sellerName}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="sellerEmail" className="block mb-2">
            Seller Email
          </label>
          <input
            type="email"
            id="sellerEmail"
            name="sellerEmail"
            value={formData.sellerEmail}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="subCategory" className="block mb-2">
            Sub-category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            value={formData.subCategory}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select a sub-category</option>
            <option value="App Controlled">App Controlled</option>
            <option value="Remote Controlled">Remote Controlled</option>
            <option value="Hand Controlled">Hand Controlled</option>
            <option value="Ramrod">Ramrod</option>
            <option value="Attack jet">Attack jet</option>
            <option value="Business Jet">Business Jet </option>
            <option value="Aventador">Aventador</option>
            <option value="Huracan">Huracan</option>
            <option value="Miura">Miura</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="price" className="block mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label htmlFor="rating" className="block mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
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
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
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
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          ></textarea>
        </div>
        <div>
          <input className="btn btn-block" type="submit" value="Add a Toy" />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
