import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ProductDelivery from "../ProductDelivery/ProductDelivery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <ProductDelivery />
    </div>
  );
};

export default Home;
