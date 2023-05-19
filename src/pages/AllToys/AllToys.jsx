import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
  const [searchToyName, setSearchToyName] = useState("");
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  //   load search toy
  const loadToy = () => {
    fetch(`http://localhost:3000/searchToy?searchToy=${searchToyName}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  useEffect(() => {
    fetch(`http://localhost:3000/searchToy?searchToy=${searchToyName}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [searchToyName]);

  const handleChangeToyName = (e) => {
    setSearchToyName(e.target.value);
  };

  //search toy
  const handleSearchToy = () => {
    loadToy();
  };

  return (
    <div>
      <div className="overflow-x-auto w-full mt-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">All Toys</h2>
        <div className="mb-4">
          <input
            value={searchToyName}
            onChange={handleChangeToyName}
            type="text"
            placeholder="Search toy by name"
            className="input input-bordered w-full max-w-xs mx-2"
          />
          <button onClick={handleSearchToy} className="btn">
            Search
          </button>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Toy Name</th>
              <th>Seller</th>
              <th>Sub category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <SingleToy key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
