import { useContext, useEffect, useState } from "react";
import { AuthContent } from "../../system/AuthProvider/AuthProvider";
import Toy from "./Toy/Toy";

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
    fetch(`http://localhost:3000/toys?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Delete successfully");
          const remaining = toys.filter((toy) => toy._id !== id);
          setToys(remaining);
        }
      });
  };

  return (
    <>
      {/* toys list */}
      <div className="overflow-x-auto w-full mt-12 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">My Toys</h2>
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
