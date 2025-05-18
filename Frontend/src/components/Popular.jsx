import React from "react";

const Popular = () => {
  const popular = [
    {
      name: "Paris",
      description: "The city of Light",
      price: 1000,
      img: "https://media.istockphoto.com/id/635758088/photo/sunrise-at-the-eiffel-tower-in-paris-along-the-seine.jpg?s=612x612&w=0&k=20&c=rdy3aU1CDyh66mPyR5AAc1yJ0yEameR_v2vOXp2uuMM=",
      rating: 4.5,
    },
    {
      name: "New York",
      description: "The city that never sleeps",
      price: 1500,
      img: "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis=",
      rating: 4.7,
    },
    {
      name: "Tokyo",
      description: "The city of the rising sun",
      price: 1200,
      img: "https://media.istockphoto.com/id/484915982/photo/akihabara-tokyo.jpg?s=612x612&w=0&k=20&c=kbCRYJS5vZuF4jLB3y4-apNebcCEkWnDbKPpxXdf9Cg=",
      rating: 4.8,
    },
    {
      name: "London",
      description: "The capital of England",
      price: 1100,
      img: "https://i.natgeofe.com/n/ff6bc870-1700-4a2f-87a2-2955abd83794/h_25.539224.jpg",
      rating: 4.6,
    },
    {
      name: "Sydney",
      description: "The harbor city",
      price: 1300,
      img: "https://www.downunderendeavours.com/wp-content/uploads/2019/05/sydney-things-to-do-800x500-Sydney-Opera-House-8.jpg",
      rating: 4.9,
    },
  ];

  return (
    <>
      <div className="w-[85%] mx-auto my-10">
        <h1 className="text-4xl font-medium font-sans">Popular Destination</h1>
        <div className="grid grid-cols-3 gap-4 mt-6 ">
          {popular.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b-2 border-gray-300 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-[160px] w-[160px] rounded-full overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out"
                  />
                </div>
                <div className="w-[240px]">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Rating: {item.rating} ⭐</p>
                  <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                    Book Now
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Popular;
