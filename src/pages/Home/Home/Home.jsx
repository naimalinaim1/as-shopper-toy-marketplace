import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import ProductDelivery from "../ProductDelivery/ProductDelivery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Subscribe from "../Subscribe/Subscribe";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  useTitle("Home");

  return (
    <div>
      <Banner />
      <Gallery />
      <ShopByCategory />
      <ProductDelivery />
      <Testimonial />
      <Subscribe />
    </div>
  );
};

export default Home;
