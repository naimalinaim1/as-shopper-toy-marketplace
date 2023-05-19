import CategoryTabs from "../CategoryTabs/CategoryTabs";

const ShopByCategory = () => {
  return (
    <div className="mt-20 py-16 px-4 rounded">
      <h2 className="text-4xl text-center font-bold mb-6">Shop You Product</h2>
      <p className="text-center text-lg hidden md:block md:px-20 mb-10">
        Find a wide range of toys for all ages lorem ipsum dolor sit amet
        consectetur adipisicing elit. Quae reiciendis magni sit fugit deserunt
        vitae porro aperiam deleniti, veritatis veniam, distinctio expedita
        officiis consequatur totam explicabo voluptatem nam architecto dolores
        nemo vero? Quas est animi qui similique, culpa.
      </p>
      <h2 className="text-xl font-bold my-6">Shop by Category</h2>
      <CategoryTabs />
    </div>
  );
};

export default ShopByCategory;
