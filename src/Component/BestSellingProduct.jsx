import React, { useState } from "react";

const products = {
  Chair: [
    { id: 1, name: "Sakarias Armchair", price: "$392", image: "/chair.svg" },
    { id: 2, name: "Baltsar Chair", price: "$299", image: "/chair1.svg" },
    { id: 3, name: "Anjay Chair", price: "$519", image: "/chair2.svg" },
    { id: 4, name: "Nyantuy Chair", price: "$921", image: "/chair3.svg" },
  ],
  Beds: [
    { id: 5, name: "Classic Bed", price: "$1,299", image: "/bed3.jpg" },
    { id: 6, name: "Luxury Bed", price: "$1,999", image: "/bed4.jpg" },
    { id: 7, name: "Modern Bed", price: "$899", image: "/bed2.jpg" },
    { id: 8, name: "Cozy Bed", price: "$1,499", image: "/bed1.jpg" },
  ],
  Sofa: [
    { id: 9, name: "Classic Sofa", price: "$799", image: "/sofa1.jpg" },
    { id: 10, name: "Luxury Sofa", price: "$1,199", image: "/sofa2.jpg" },
    { id: 11, name: "L-Shaped Sofa", price: "$1,499", image: "/sofa3.jpg" },
    { id: 12, name: "Minimalist Sofa", price: "$1,099", image: "/sofa4.jpg" },
  ],
  Lamp: [
    { id: 13, name: "Wooden Lamp", price: "$120", image: "/lamp1.jpg" },
    { id: 14, name: "Modern Lamp", price: "$85", image: "/lamp2.jpg" },
    { id: 15, name: "Luxury Lamp", price: "$200", image: "/lamp3.jpg" },
    { id: 16, name: "Glass Lamp", price: "$170", image: "/lamp4.jpg" },
  ],
};

const BestSellingProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [startIndex, setStartIndex] = useState(0);
  const [viewAll, setViewAll] = useState(false);

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < products[selectedCategory].length - 4)
      setStartIndex(startIndex + 1);
  };


  


  return (
    <div className="flex flex-col items-center w-full py-14 bg-gray-100">
      <h2 className="text-5xl font-bold mb-12">Best Selling Product</h2>

      {/* Category Toggle */}
      <div className="flex overflow-x-auto bg-gray-300 justify-center w-full max-w-[350px] h-[57px] p-[6px_0px_0px_0px] rounded-full my-6">
      {Object.keys(products).map((category) => (
          <button
            key={category}
            className={`w-[84px] h-[45px] p-2 rounded-full transition 
              ${selectedCategory === category ? "bg-white font-semibold" : ""
            }`}
            onClick={() => {
              setSelectedCategory(category);
              setStartIndex(0);
              setViewAll(false);
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Carousel */}
      <div className=" w-full my-14 flex items-center px-10 justify-between">
        <button
    className="p-3 rounded-full bg-gray-200 shadow-md "
    onClick={handlePrev}
          disabled={startIndex === 0}
        >
          ←
        </button>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {products[selectedCategory]
            .slice(startIndex, startIndex + 4)
            .map((product) => (
              <div
                key={product.id}
                className="bg-white p-5 space-y-2 rounded-lg shadow-md text-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[240px] h-[265px] mx-auto mb-4 rounded-lg"
                />
                <p className="text-gray-500 hidden">{selectedCategory}</p>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <div className="text-yellow-500">★★★★★</div>
                <div className="flex justify-between items-center pt-5">
                  <p className="text-lg font-bold">{product.price}</p>
                  <button className="bg-blue-950 text-white py-2 px-4 rounded-full">
                    +
                  </button>
                </div>
              </div>
            ))}
        </div>

        <button
    className="p-3 rounded-full bg-gray-200 shadow-md "
    onClick={handleNext}
          disabled={startIndex >= products[selectedCategory].length - 4}
        >
          →
        </button>
      </div>

      <button className="text-orange-500 mt-6 text-lg"
  onClick={() => setViewAll(!viewAll)}>
  {viewAll ? "Show Less" : "View All →"}
  </button>



    </div>
  );
};

export default BestSellingProducts;
