// eslint-disable-next-line react/prop-types
const UserTestimonial = ({ image, name }) => {
  return (
    <div className="border rounded px-4 py-8">
      <div className="avatar flex justify-center mb-6">
        <div className="w-24 rounded-full border">
          <img src={image} />
        </div>
      </div>
      <p className="text-lg text-gray-500 leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa amet
        veniam porro dolores recusandae. consectetur elit
      </p>
      <h2 className="text-xl font-bold mt-7">{name}</h2>
      <p className="text-gray-500">System Analyst</p>
    </div>
  );
};

export default UserTestimonial;
