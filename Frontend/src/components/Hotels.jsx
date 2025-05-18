import React from "react";

const Hotels = () => {
  const hotels = [
    {
      name: "The Ritz",
      description:
        "The Ritz London is a renowned 5-star luxury hotel located in the heart of London's West End, on Piccadilly.",
      img: "https://life.london/wp-content/uploads/2024/02/ritz-2-scaled.webp",
      rating: 4.5,
    },
    {
      name: "Hotel Plaza",
      description:
        "A Hotel Plaza is a commercial establishment offering lodging, meals, and other services to guests, travelers, and tourists.",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=1200&h=-1&s=1",
      rating: 4.7,
    },
    {
      name: "Orange pie",
      description:
        "Hotel Orange Pie in Noida is a well-located establishment, situated in the heart of the city's corporate hub.",
      img: "https://static.prod.r53.tablethotels.com/media/ecs/global/michelin-articles/Paris+Guide+Images/Bar+Hotels/LeMeurice.jpg",
      rating: 4.8,
    },
    {
      name: "OYO",
      description:
        "OYO Hotels & Homes is an Indian multinational hospitality chain and technology company that partners with small businesses to provide affordable and trusted accommodation.",
      img: "https://www.wyndhamhotels.com/content/dam/creative-images/en-us/hr/flat/1x1/hr_1x1_wellness_50828_room.jpg?downsize=700:*",
      rating: 4.6,
    },
    {
      name: "Langham",
      description:
        "The Langham Hotels and Resorts are known for their blend of classic and contemporary luxury, offering guests a refined and relaxing experience.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Langham_london.jpg",
      rating: 4.9,
    },
  ];

  return (
    <>
      <div className="w-[85%] mx-auto my-10">
        <h1 className="text-4xl font-medium font-sans">Featured Hotels</h1>
        <div className="grid grid-cols-3 gap-4 mt-6 ">
          {hotels.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center  border-b-2 border-gray-300 py-4"
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
                  <p className="text-gray-600">
                    {" "}
                    <span className="font-bold">Rating:</span> {item.rating} ⭐
                  </p>
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

export default Hotels;
