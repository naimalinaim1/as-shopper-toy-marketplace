const Subscribe = () => {
  return (
    <section className="bg-gray-100 py-20 mt-20 mb-36 text-center">
      <div className="max-w-[900px] mx-auto px-6">
        <div className="bg-white rounded-lg shadow-md py-8 sm:py-14 md:py-20 px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-6">
            Get the latest updates and news delivered straight to your inbox.
          </p>
          <div className="max-w-[500px] px-2 mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full"
            />
            <button className="btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
