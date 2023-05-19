import UserTestimonial from "./UserTestimonial";

const Testimonial = () => {
  return (
    <div className="my-20 py-10 px-8 text-center">
      <p className="text-xl text-gray-500 uppercase">Customer says</p>
      <h1 className="text-4xl font-bold mt-2 mb-5">
        Our satisfied customer says
      </h1>
      <p className="text-gray-500 text-lg w-[80%] mx-auto">
        As Shopper is the best online marketplace shopping. Far far away, behind
        the word mountains, far from the countries Vokalia and Consonantia,
        there live the blind texts
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
        <UserTestimonial
          name="Larry Elison"
          image="https://i.ibb.co/s6Zx254/download.jpg"
        />
        <UserTestimonial
          name="Jeff Bezos"
          image="https://i.ibb.co/nnmsRyC/download-1.jpg"
        />
        <UserTestimonial
          name="Ahamed Hossain"
          image="https://i.ibb.co/ZHnRMFL/gettyimages-1344317821-1024x1024.jpg"
        />
        <UserTestimonial
          name="Ibrahim"
          image="https://i.ibb.co/nnmsRyC/download-1.jpg"
        />
        <UserTestimonial
          name="Ibran"
          image="https://i.ibb.co/s6Zx254/download.jpg"
        />
        <UserTestimonial
          name="Bernard"
          image="https://i.ibb.co/LZyNS99/alexander-hipp-i-EEBWg-Y-6l-A-unsplash.jpg"
        />
      </div>
    </div>
  );
};

export default Testimonial;
