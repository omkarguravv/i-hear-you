import React from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function LandingPage() {
  return (
    <div className="md:flex md:flex-row flex-col w-full md:min-h-screen jusitify-center items-center text-slate-700 ">
      <div className="md:w-1/2">
        <img className="mb-10 md:mb-0" src="./assets/signHands.webp" alt="" />
      </div>
      <div className="md:w-1/2">
        <p className="text-sm md:text-2xl">
          Welcome to <span className="font-semibold">I Hear You</span>, where
          innovation meets accessibility in the realm of sign language
          communication. Our cutting-edge sign language detection technology
          empowers users to bridge communication gaps effortlessly. Seamlessly
          interpreting sign language gestures, our platform opens up new
          possibilities for individuals with hearing impairments and facilitates
          smoother communication for everyone. Experience the simplicity of our
          tool by trying out the demo, where you'll witness real-time sign
          language interpretation. Whether you're a sign language enthusiast, a
          student, or someone passionate about inclusive communication, [Your
          Website Name] is your go-to destination. Join us in revolutionizing
          the way we connect and communicate – one gesture at a time. Sign up
          today and embark on a journey towards a more inclusive and accessible
          future.
        </p>

        <h2 className="mt-10">
          <Link
            className="inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-bold px-5 py-2.5 justify-center text-white "
            to="/sign"
          >
            Try Now
            <MdArrowOutward />
          </Link>
        </h2>
      </div>
    </div>
    
  );
}

export default LandingPage;
