const Blog = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mt-6 text-center">Blog & FAQ</h2>
      <div className="mt-10 mb-20 grid md:grid-cols-2 gap-5">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and
            where should we stor them on the client-side?
          </div>
          <div className="collapse-content">
            <p>
              Refresh tokens allow you to balance your users access needs with
              your organizations security practices. The refresh token is used
              to generate a new access token.
            </p>
            <p>
              Access tokens are used in token-based authentication to allow an
              application to access an API.
            </p>
            <p>
              Access tokens are stored client side local storage and cookies.
              But Highly requirement cookie.
            </p>
          </div>
        </div>
        <div
          tabIndex={1}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL database?
          </div>
          <div className="collapse-content">
            <p>
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
            </p>
          </div>
        </div>
        <div
          tabIndex={2}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is express js? What is Next JS?
          </div>
          <div className="collapse-content">
            <p>
              Express js are Fast, unopinionated, minimalist web framework for
              Node.js
            </p>
            <p>
              Next js is a react framework that gives you building blocks to
              create web applications
            </p>
          </div>
        </div>
        <div
          tabIndex={3}
          className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how dose it work?
          </div>
          <div className="collapse-content">
            <p>
              Aggregation is a way of processing a large number of documents in
              a collection by means of passing them through different stages
            </p>
            <p>
              filter, sort, group, reshape and modify documents that pass
              through the pipeline
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
