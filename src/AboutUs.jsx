import React from "react";

function AboutUs() {
  return (
    <div name="About" className="text-center ">
      <h2 className="text-3xl md:text-5xl font-bold ">About US</h2>
      <div className="md:flex md:flex-row flex flex-col-reverse jusitify-center items-center w-full">
        <h3 className=" text-center md:text-left text-sm md:text-2xl  w- 0 md:w-1/2">
          Greetings from the passionate minds behind
          <span className="font-semibold">I Hear You</span>, a groundbreaking
          endeavor brought to life by a dedicated team of four final-year
          students. As undergraduates in{" "}
          <span className="font-semibold">Terna Engineering College</span>, we
          share a common goal—to harness technology for the betterment of
          society. <span className="font-semibold">I Hear You</span> is not just
          our final year project; it's our collective vision to make a
          meaningful impact on accessibility and communication.
        </h3>
        <div className="w-1/2 ">
          <img className="" src="./assets/giphy.gif" alt="" />
        </div>
      </div>

      <h2 className="text-3xl md:text-5xl font-bold mt-20"> Our Journey:</h2>
      <div className="md:flex md:flex-row flex-col w-full jusitify-center items-center">
        <div className="md:w-1/2 ">
          <img className="p-12 md:p-20" src="./assets/aboutus.png" alt="" />
        </div>
        <h3 className="text-sm md:text-2xl text-center md:text-right md:w-1/2">
          Driven by a shared passion for technology and a commitment to creating
          positive change, our journey began with the realization that sign
          language, a rich and expressive form of communication, deserves
          enhanced accessibility. Through countless hours of collaboration,
          problem-solving, and learning, we've developed [Your Project Name] as
          a testament to our dedication and belief in the power of technology to
          break barriers. Join us on this exciting adventure as we navigate the
          final stages of our academic journey and embark on a mission to
          contribute to a more inclusive future. [Your Project Name] is not just
          a project; it's a collective effort to make a difference, one that we
          invite you to be a part of. Thank you for joining us on this impactful
          journey!
        </h3>
      </div>
    </div>
  );
}

export default AboutUs;
