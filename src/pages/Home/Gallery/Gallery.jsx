const Gallery = () => {
  const images = [
    "https://i.ibb.co/J2g1F71/8.jpg",
    "https://i.ibb.co/Zh41rMp/9.png",
    "https://i.ibb.co/WkBT6vP/10.jpg",
    "https://i.ibb.co/PmJ9rRz/11.jpg",
    "https://i.ibb.co/m6Sg2G6/1.jpg",
    "https://i.ibb.co/Mhyj8gt/2.jpg",
    "https://i.ibb.co/C21PXvn/3.jpg",
    "https://i.ibb.co/Z1W1FBQ/4.jpg",
    "https://i.ibb.co/SB4RQ4L/5.jpg",
    "https://i.ibb.co/WyVbdH0/6.jpg",
    "https://i.ibb.co/Zh41rMp/9.png",
    "https://i.ibb.co/v16W9Dj/7.jpg",
  ];
  return (
    <div className="py-16">
      <h2 className="text-4xl text-center font-bold mb-6">Toy Cars Gallery</h2>
      <p className="text-center text-lg hidden md:block md:px-20 mb-10">
        Find a wide range of toys for all ages lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae reiciendis magni sit fugit deserunt
        vitae porro aperiam deleniti, veritatis veniam, distinctio expedita
        officiis consequatur totam explicabo voluptatem nam architecto dolores
        nemo vero? Quas est animi qui similique, culpa dignissimos accusantium
        sit repellendus, tempore odit sequi hic repudiandae laborum soluta
        facilis!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <>
            <div key={idx} className="p-6 border rounded">
              <img
                src={img}
                alt="Gallery Image"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
