import React from "react";

const Destination = () => {
  const destinations = [
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
    {
      name: "Rome",
      description: "The eternal city",
      price: 900,
      img: "https://media.istockphoto.com/id/539115110/photo/colosseum-in-rome-and-morning-sun-italy.jpg?s=612x612&w=0&k=20&c=9NtFxHI3P2IBWRY9t0NrfPZPR4iusHmVLbXg2Cjv9Fs=",
      rating: 4.4,
    },
    {
      name: "Barcelona",
      description: "The city of Gaudi",
      price: 950,
      img: "https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/020/484/original/d0531471711b367b94abfd4dbc29e6ae/spain-barcelona-sagrada-familia-080416-az.jpg",
      rating: 4.5,
    },
    {
      name: "Dubai",
      description: "The city of luxury",
      price: 2000,
      img: "https://t4.ftcdn.net/jpg/02/44/69/29/360_F_244692979_t2oCOiISldR1fynEcARDEGr1jWEIF12z.jpg",
      rating: 4.8,
    },
    {
      name: "Singapore",
      description: "The garden city",
      price: 1700,
      img: "https://media.istockphoto.com/id/590050726/photo/singapore-glowing-at-night.jpg?s=612x612&w=0&k=20&c=43tSsy1yC0iOAGL3ZVq3-nl84KnmWTnHGI5mwQtp8zo=",
      rating: 4.7,
    },
    {
      name: "Istanbul",
      description: "The city that bridges Europe and Asia",
      price: 800,
      img: "https://static.toiimg.com/thumb/msid-87603676,width-748,height-499,resizemode=4,imgsize-213838/.jpg",
      rating: 4.6,
    }
  ];

  return (
    <>
      <div className="min-h-screen">
        <img
          src="https://wallpapers.com/images/featured/beautiful-travel-730oz7ejbh6axdlf.jpg"
          alt=""
          className="w-full object-cover "
        />
        <div className="w-[85%] mx-auto my-10">
          <h1 className="text-5xl font-medium">Destinations</h1>
          <div className="grid grid-cols-2 gap-4 my-8 ">
            {destinations.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b-2 border-gray-300 py-4"
              >
                <div className="flex items-start gap-10">
                  <div className="h-[250px] w-[250px] rounded-full overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover hover:scale-[1.1] transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="w-[240px] mt-4 flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-gray-600 text-lg">{item.description}</p>
                    <p className="text-gray-600 text-lg"><span className="font-bold">Price:</span> ${item.price}</p>
                    <p className="text-gray-600 text-lg"><span className="font-bold">Rating:</span> {item.rating} ⭐</p>
                    <button className="mt-2 text-lg w-fit bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
