import React from "react";

const About = () => {

  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      image: "https://media.istockphoto.com/id/1325164545/photo/portrait-of-mature-business-men-wearing-suit-standing-against-gray-background-stock-photo.jpg?s=612x612&w=0&k=20&c=W-dzq5Y-npRbjIoKUzBt81frrsRsY84BYWH80enx3Hk=",
      responsibilities: "John Doe is the Founder and Chief Executive Officer of the company, responsible for shaping and guiding its overall vision, strategy, and growth. With a clear focus on long-term goals, he leads the organization by making critical decisions that impact the company’s direction and success. John oversees day-to-day operations, ensuring all departments align with the company’s mission and objectives. As the primary link between the board of directors and the company, he communicates key initiatives and progress while maintaining transparency and accountability. Under his leadership, the company thrives on innovation, strategic planning, and a commitment to excellence, setting a strong foundation for continued growth and success.Oversees the overall operations and strategic direction of the company. Ensures that the company meets its goals and objectives.",
    },
    {
      name: "Jane Smith",
      role: "Travel Consultant",
      image: "https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=",
      responsibilities: "Jane Smith is a skilled and passionate Travel Consultant who specializes in helping clients plan and enjoy memorable travel experiences. With a strong understanding of global destinations and travel trends, she provides expert advice tailored to each client’s preferences, interests, and budget. Jane assists with every aspect of the journey — from selecting the perfect destination and booking flights to arranging accommodations, activities, and tours. She is also well-versed in travel documentation, visa requirements, and safety guidelines, ensuring her clients are well-prepared and confident before they depart. Known for her attention to detail and commitment to customer satisfaction, Jane offers ongoing support throughout the travel process, including handling last-minute changes and providing assistance in case of emergencies.",
    },
    {
      name: "Emily Johnson",
      role: "Marketing Manager",
      image: "https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=",
      responsibilities: "Emily Johnson is a seasoned Marketing Manager specializing in travel services. She leads the development and execution of strategic marketing campaigns to boost brand visibility and attract new clients. Emily expertly manages social media platforms, creates engaging content, and analyzes market trends to identify growth opportunities. Her data-driven approach ensures campaigns are both creative and effective, contributing directly to the company’s expansion and customer engagement goals.",
    },
  ];

  return (
    <>
      <div className="min-h-screen ">
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/304/687/non_2x/about-us-text-web-button-template-banner-vector.jpg"
          className="w-full h-[80vh] object-cover"
          alt=""
        />
        <div className="w-[80%] mx-auto my-10">
          <div className="w-fullflex  flex-col gap-4 pl-5 pt-3 space-y-3">
            <h1 className="text-5xl font-medium">About Us</h1>
            <p className="text-lg mt-4">
              Welcome to Dream Destination, your ultimate travel companion! We
              are dedicated to helping you explore the world and create
              unforgettable memories. Our mission is to provide you with the
              best travel experiences, from breathtaking destinations to
              personalized itineraries.
            </p>
            <p className="text-lg mt-1">
              At Dream Destination, we believe that travel is not just about
              reaching a destination; it's about the journey, the experiences,
              and the connections you make along the way. Our team of travel
              experts is passionate about discovering new places and sharing
              their knowledge with you.
            </p>
            <p className="text-lg mt-1">
              Whether you're looking for a relaxing beach getaway, an
              adventurous mountain trek, or a cultural city tour, we have
              something for everyone. Our carefully curated selection of
              destinations and activities ensures that you will find the perfect
              trip to suit your interests and preferences.
            </p>
            <p className="text-lg mt-1">
              We pride ourselves on our commitment to customer satisfaction. Our
              dedicated support team is available 24/7 to assist you with any
              questions or concerns you may have before, during, or after your
              trip. Your happiness is our top priority!
            </p>
            <p className="text-lg mt-1">
              Join us on this exciting journey and let us help you turn your
              travel dreams into reality. Explore our website to discover
              amazing destinations, read travel tips, and find inspiration for
              your next adventure. Thank you for choosing Dream Destination!
              We can't wait to be a part of your travel story!
            </p>
            <p className="text-lg mt-1">
              Safe travels and happy exploring!
            </p>

            <h2 className="text-5xl font-medium mt-5">Meet Our Team!</h2>
            <div className=" my-10">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-8 my-5 border-b-2 border-gray-500 pb-5"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-[300px] h-[300px] rounded-full object-cover"
                  />
                  <div className="flex flex-col justify-start space-y-3 mt-4">
                    <h3 className="text-3xl font-semibold">{member.name}</h3>
                    <p className="text-2xl font-medium">{member.role}</p>
                    <p className="text-md">{member.responsibilities}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
