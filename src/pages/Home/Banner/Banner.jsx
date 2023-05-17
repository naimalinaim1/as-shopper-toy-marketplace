const Banner = () => {
  return (
    <section className="grid md:grid-cols-2 gap-4 items-center">
      <img
        src="https://img.freepik.com/free-vector/happy-baby-concept-illustration_114360-8418.jpg"
        alt="toys"
        className="mx-auto"
      />
      <div className="text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4">Welcome to Toy Marketplace </h1>
        <p className="text-lg my-5">
          Find a wide range of toys for all ages lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Necessitatibus mollitia doloribus
          distinctio culpa eos architecto recusandae perspiciatis explicabo
          repellendus. Molestiae similique amet suscipit omnis voluptatibus,
          tenetur aut unde dolores commodi.
        </p>
        <p className="btn btn-success">Read More</p>
      </div>
    </section>
  );
};

export default Banner;
