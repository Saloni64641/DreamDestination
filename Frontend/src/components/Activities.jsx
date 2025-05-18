import React from "react";

const Activities = () => {
  const activities = [
    {
      name: "Hiking",
      description:
        "The Ritz London is a renowned 5-star luxury hotel located in the heart of London's West End, on Piccadilly.",
      img: "https://terradrift.com/wp-content/uploads/2021/08/IMG_0974-1.jpg",
    },
    {
      name: "Swimming",
      description:
        "A Hotel Plaza is a commercial establishment offering lodging, meals, and other services to guests, travelers, and tourists.",
      img: "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Bungee Jumping",
      description:
        "Hotel Orange Pie in Noida is a well-located establishment, situated in the heart of the city's corporate hub.",
      img: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2024/07/Bungee-Jumping-Bundi-Rajasthan.jpg?resize=1024%2C727&ssl=1",
    },
    {
      name: "Night Out",
      description:
        "OYO Hotels & Homes is an Indian multinational hospitality chain and technology company that partners with small businesses to provide affordable and trusted accommodation.",
      img: "https://nustafir.com/wp-content/uploads/2024/03/Alibaug-Camping.jpeg",
    },
  ];

  return (
    <>
      <div className="w-[85%] mx-auto my-10">
        <h1 className="text-4xl font-medium font-sans">Featured Activities</h1>
        <div className="flex gap-5 mt-10">
            {activities.map((activity, index) => (
                <div key={index} className="flex flex-col gap-1 h-[400px] w-[300px]">
                    <span className="h-[250px] w-full rounded-lg overflow-hidden">
                        <img src={activity.img} alt={activity.name} className=" object-cover w-full h-full hover:scale-[1.1] transition-all duration-500 ease-in-out"/>
                    </span>
                    <span className="flex flex-col gap-1">
                        <h1 className="text-2xl font-medium">{activity.name}</h1>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                    </span>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Activities;
