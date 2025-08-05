import React from "react";

const Blog = () => {
  const blogs = [
    {
      img: "/one.jpg",
      title: (
        <>
          Efficient repairs, reliable <br /> Results,every time here
        </>
      ),
    },
    {
      img: "/two.jpg",
      title: (
        <>
          We’ll get your car back on <br /> the road
        </>
      ),
    },
    {
      img: "/three.jpg",
      title: (
        <>
          Quality repairs for your car <br /> at affordable prices
        </>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-2 flex items-center justify-center gap-2">
          {/* Symbol goes here */}
          <span className="text-orange-500 font-bold text-sm">BLOGS</span>
        </div>
        <h2 className="text-4xl font-bold text-center mb-12">
          Latest Blog & News
        </h2>
        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-sm overflow-hidden shadow-md flex flex-col"
            >
              {/* Blog image */}
              <div className="relative w-full h-48 bg-gray-200">
                <img
                  src={blogs[i].img}
                  alt=""
                  className="w-[400px] h-48 object-cover"
                />
                {/* Date badge */}
                <div className="absolute top-4 left-4 pb-4 bg-orange-500 text-white px-3 py-1 text-xs font-bold text-center">
                  <div className="text-lg">15</div>
                  <div className="uppercase tracking-widest">May</div>
                </div>
              </div>
              {/* Blog content */}
              <div className="p-6 ml-2 flex flex-col flex-1">
                <div className="flex items-center text-xs mb-2 gap-2">
                  <img src="/user.svg" alt="" />
                  <span>
                    <span className="font-semibold">Post By</span> Malen
                  </span>
                  <span className="mx-2">|</span>
                  <img src="/comment.svg" alt="" />
                  <span className="font-semibold">Comments(3)</span>
                </div>
                <h3 className="text-lg font-bold tracking-wider text-gray-900 mb-4">
                  {/* Blog title here */}
                  {blogs[i].title}
                </h3>
                <div className="border-t border-[#D2D2D2] my-2"></div>
                <div className="mt-auto pt-2">
                  <a
                    href="#"
                    className="text-sm font-semibold text-gray-900 flex items-center gap-1 hover:text-orange-500 transition"
                  >
                    READ MORE
                    {/* Arrow icon here */}
                    <span className="text-orange-500 ml-1">
                      <img src="/arrowright.svg" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
