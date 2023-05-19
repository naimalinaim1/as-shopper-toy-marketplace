import LazyLoad from "react-lazyload";

const ProductDelivery = () => {
  const handleAddressSend = (e) => e.preventDefault();

  return (
    <div className="my-20 py-10 px-2 sm:px-8 rounded">
      <h2 className="text-center text-4xl font-bold">
        How can I get the product?
      </h2>
      <p className="text-center mb-6 mt-1 text-lg">
        We provide reliable shipping services to deliver your product to your
        desired location
      </p>
      <LazyLoad>
        <img
          className="mx-auto rounded"
          src="https://i.ibb.co/v1HPbwL/product-delivery.jpg"
          alt=""
        />
      </LazyLoad>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        <div>
          <h3 className="text-lg font-bold">Shipping</h3>
          <p>
            We provide reliable shipping services to deliver your product to
            your desired location. Shipping options include:
          </p>
          <ul className="list-disc ml-6 my-4">
            <li>Standard Shipping: 3-5 business days</li>
            <li>Express Shipping: 1-2 business days</li>
            <li>International Shipping: 7-14 business days</li>
          </ul>

          <h3 className="text-lg font-bold">In-Store Pickup</h3>
          <p>
            If you prefer, you can also choose the option for in-store pickup.
            Simply place your order online and select the nearest store location
            for pickup. Once your order is ready, well notify you via email.
          </p>

          <h3 className="text-lg font-bold">Contact Information</h3>
          <p>
            If you have any questions regarding product delivery or need further
            assistance, please feel free to contact our customer support team:
          </p>
          <ul className="list-disc ml-6 my-4">
            <li>Phone: 123-456-7890</li>
            <li>Email: support@example.com</li>
          </ul>
        </div>
        <form onSubmit={handleAddressSend}>
          <p className="text-xl text-center font-bold">
            Please Provide your information
          </p>
          <div className="mt-4">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="address" className="block">
              Address:
            </label>
            <textarea
              id="address"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="phone" className="block">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <input
            className="btn btn-info mt-4"
            type="submit"
            value="Send Address"
          />
        </form>
      </div>
    </div>
  );
};

export default ProductDelivery;
