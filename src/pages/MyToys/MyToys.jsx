import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../system/AuthProvider/AuthProvider";
import Toy from "./Toy/Toy";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContent);
  const [toys, setToys] = useState([]);

  // load toy
  useEffect(() => {
    fetch(`http://localhost:3000/toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);

  // handle delete toy
  const handleDeleteToy = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/toys?id=${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== id);
              setToys(remaining);
            }
          });
      }
    });
  };

  // handle sorting data
  const handleSortingData = (e) => {
    const sort = e.target.value;
    fetch(`http://localhost:3000/sortByPrice?email=${user?.email}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };
  return (
    <>
      {/* toys list */}
      <div className="overflow-x-auto w-full mt-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">My Toys</h2>
        <div className="text-right mb-6 mr-2">
          <p className="font-bold mr-14 mb-2">Sort By Price</p>
          <select
            onChange={handleSortingData}
            className="select select-primary w-full max-w-[150px]"
          >
            <option value={0}>Sort By</option>
            <option value={1}>Ascending</option>
            <option value={-1}>Descending</option>
          </select>
        </div>
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, idx) => (
              <Toy
                handleDeleteToy={handleDeleteToy}
                index={idx}
                key={toy?._id}
                toy={toy}
              />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyToys;
