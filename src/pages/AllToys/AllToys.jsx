import { useEffect, useState } from "react";
import SingleToy from "./SingleToy";

const AllToys = () => {
  const [searchToyName, setSearchToyName] = useState("");
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalToy, setTotalToy] = useState(0);

  // pagination
  const perPageItem = 20;
  const totalPage = Math.ceil(totalToy / perPageItem);
  const totalButton = [...Array(totalPage).keys()];

  // get total toy length
  useEffect(() => {
    fetch(`http://localhost:3000/totalToys?searchToy=${searchToyName}`)
      .then((res) => res.json())
      .then((data) => setTotalToy(data?.totalToy));
    console.log(searchToyName);
  }, [searchToyName]);

  //   load search toy
  const loadToy = () => {
    fetch(
      `http://localhost:3000/searchToy?searchToy=${searchToyName}&page=${currentPage}&size=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  useEffect(() => {
    fetch(
      `http://localhost:3000/searchToy?searchToy=${searchToyName}&page=${currentPage}&size=${perPageItem}`
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [currentPage, searchToyName]);

  const handleChangeToyName = (e) => {
    if (e.target.value != " ") {
      setSearchToyName(e.target.value);
      setCurrentPage(0);
    }
  };

  //search toy
  const handleSearchToy = () => {
    loadToy();
    setCurrentPage(0);
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
              <th>No</th>
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
            {toys.length > 0 ? (
              <>
                {toys.map((toy, idx) => (
                  <SingleToy
                    index={idx + currentPage * perPageItem}
                    key={toy._id}
                    toy={toy}
                  />
                ))}
              </>
            ) : totalToy === 0 ? (
              <tr>
                <td className="text-red-500">No found</td>
              </tr>
            ) : (
              <tr>
                <td className="text-blue-500">Loading</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="w-full my-6 text-center">
          <div className="btn-group">
            {totalToy > perPageItem &&
              totalButton.map((button) => (
                <button
                  onClick={() => setCurrentPage(button)}
                  key={button}
                  className={`btn ${
                    currentPage === button ? "btn-active" : ""
                  }`}
                >
                  {button}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
