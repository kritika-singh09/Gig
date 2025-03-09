
import React,{useState} from "react";
import { FaUserCircle, FaSearch, FaStar } from "react-icons/fa";
import { Mouse } from "lucide-react";
import { FaMusic } from "react-icons/fa";
import { MdOutlineSearch } from "react-icons/md";
import { ChevronLeft, ChevronRight } from "lucide-react";



const testimonials = [
  {
    id: 1,
    text: "As a DJ, finding consistent bookings was challenging until I joined GetGigs. Now I'm booked months in advance!",
    name: "Priya Singh",
    role: "Professional DJ",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    text: "GetGigs helped me showcase my talent to a wider audience. I now perform at top venues regularly!",
    name: "John Doe",
    role: "Live Performer",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 3,
    text: "I used to struggle with networking, but GetGigs made it seamless. My career skyrocketed!",
    name: "Sarah Lee",
    role: "Singer & Songwriter",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  }
];
export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <section className="bg-gradient-to-r from-black to-purple-700 text-white min-h-screen flex flex-col items-center justify-center text-center px-6">
   
        <div className="bg-black text-gray-300 px-6 py-2 rounded-full text-sm mb-6 mt-5 animate-bounce border border-purple-500 transition duration-300 hover:bg-purple-600 hover:text-white">
        Connecting Artists & Organizers
      </div>


      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Book & Get Booked — The Ultimate Hub for
        <span className="text-black"> Artists </span>&
        <span className="text-purple-600"> Organizers!</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 max-w-2xl mb-6 text-lg">
        Connecting talented artists with event organizers seamlessly. Find gigs,
        book talent, and make every event a success.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button className="bg-purple-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2 font-semibold hover:bg-purple-600 transition duration-300 shadow-lg">
          🎵 Join as an Artist
        </button>
        <button className="bg-transparent border border-gray-400 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-black transition duration-300 shadow-lg">
          📅 Find Talent as an Organizer
        </button>
        
      </div>
      <p >trusted by 1000+ artists and the event organizers across india</p>
      <div className="animate-bounce  mt-10">
  <Mouse className="w-15 h-20 
 text-gray-500 strokeWidth={1} " />
</div>
      {/* How It Works */}
      <h2 className="text-4xl font-bold mb-6">How It <span className="text-purple-500">Works</span></h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
        A simple three-step process to connect artists with event organizers.
      </p>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaUserCircle className="text-purple-500 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Create Your Profile</h3>
          <p className="text-gray-400 mt-2">
            Artists & Organizers create detailed profiles showcasing their work and requirements.
          </p>
        </div>
        {/* Step 2 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaSearch className="text-purple-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Connect & Book</h3>
          <p className="text-gray-400 mt-2">
            Browse, connect, and book gigs with secure payments and clear terms.
          </p>
        </div>
        {/* Step 3 */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
          <FaStar className="text-purple-600 text-5xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Perform & Review</h3>
          <p className="text-gray-400 mt-2">
            Perform, organize, and grow with ratings & reviews to build your reputation.
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mt-8">
          Powerful <span className="text-purple-600">Features</span>
        </h2>
        <p className="mt-2 text-gray-400">
          Tailored solutions for both artists and event organizers
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
        {/* For Artists */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-white">
            <span className="text-black text-xl mr-2">🎤</span> For Artists
          </h3>
          <div className="mt-4 space-y-4">
            {/* Card 1 */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="flex items-center text-white font-semibold">
                <span className="text-black text-xl mr-2">🎙️</span> Professional Portfolio
              </h4>
              <p className="text-gray-400 mt-1">
                Get discovered with a professional portfolio showcasing your talent and experience.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="flex items-center text-white font-semibold">
                <span className="text-black  text-xl mr-2">💲</span> Secure Payments
              </h4>
              <p className="text-gray-400 mt-1">
                Receive secure bookings and hassle-free payments directly to your account.
              </p>
            </div>
          </div>
        </div>

        {/* For Organizers */}
        <div>
          <h3 className="flex items-center text-lg font-semibold text-white">
            <span className="text-purple-600 text-xl mr-2">📅</span> For Organizers
          </h3>
          <div className="mt-4 space-y-4">
            {/* Card 1 */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="flex items-center text-white font-semibold">
                <span className="text-blue-400 text-xl mr-2">🔍</span> Find Top Talent
              </h4>
              <p className="text-gray-400 mt-1">
                Discover and book top artists filtered by category, rating, and availability.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
              <h4 className="flex items-center text-white font-semibold">
                <span className="text-black text-xl mr-2">📆</span> Event Management
              </h4>
              <p className="text-gray-400 mt-1">
                Manage multiple events and bookings all in one streamlined platform.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* what people say */}
{/* What People Say Section */}
<div className="flex flex-col mt-8 items-center bg-gray-900 text-white py-12 px-6 min-h-4 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-4">What People <span className="text-blue-400">Say</span></h2>
  <p className="text-gray-400 mb-6">Real stories from artists and organizers using GetGigs</p>
  
  <div className="relative bg-gray-800 p-8 rounded-xl w-full max-w-xl text-center shadow-lg transition-all duration-500">
    <p className="italic text-lg text-gray-300 opacity-90 transition-opacity duration-500">
      "{testimonials[currentIndex].text}"
    </p>
    
    <div className="flex flex-col items-center mt-6">
      <img
        src={testimonials[currentIndex].image}
        alt={testimonials[currentIndex].name}
        className="w-16 h-16 rounded-full border-4 border-blue-400 shadow-md transition-transform duration-500 hover:scale-105"
      />
      <p className="font-bold text-lg mt-3">{testimonials[currentIndex].name}</p>
      <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
    </div>

    {/* Navigation Buttons */}
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all duration-300"
      onClick={prevTestimonial}
    >
      <ChevronLeft size={24} />
    </button>
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition-all duration-300"
      onClick={nextTestimonial}
    >
      <ChevronRight size={24} />
    </button>
  </div>

  {/* Dots Navigation */}
  <div className="flex mt-6 space-x-2">
    {testimonials.map((_, index) => (
      <span
        key={index}
        className={`h-3 w-3 rounded-full transition-all duration-300 ${
          index === currentIndex ? "bg-purple-600 w-5" : "bg-gray-600"
        }`}
      ></span>
    ))}
  </div>
</div>
<div className="flex items-center justify-center min-h-4 mt-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-4 max-w-7xl mx-auto">
      <div className="bg-gray-800 shadow-lg rounded-2xl p-8 text-center max-w-lg">
        {/* Join the community button */}
        <button className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 flex items-center mx-auto gap-2">
          <span className="text-purple-600">✨</span> Join the community
        </button>

        {/* Heading */}
        <h1 className="text-3xl font-bold">
          Get Started Today —{" "}
          <span className="text-white">Sign Up</span> & Book More{" "}
          <span className="text-purple-600">Gigs!</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-sm">
          Whether you're an artist looking for your next performance or an
          organizer searching for talent, GetGigs connects you with the right
          people.
        </p>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-black hover:bg-black text-white flex items-center gap-2 px-6 py-3 rounded-lg text-lg">
            <FaMusic /> Join as an Artist
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white flex items-center gap-2 px-6 py-3 rounded-lg text-lg border border-gray-500">
            <MdOutlineSearch /> Find Talent as an Organizer
          </button>
        </div>
      </div>
    </div>
    </section>
  );
}
