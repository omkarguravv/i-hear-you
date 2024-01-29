import React, { useEffect, useState } from "react";
import HoverVideoPlayer from "react-hover-video-player";
import LearningShimmer from "./LearningShimmer";

const learnings = [
  {
    sign: "Learn Welcome",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_ec8292e82.mp4",
  },
  {
    sign: "Congratulations",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_ec8fbc856.mp4",
  },
  {
    sign: "Happy Holidays",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_e204f7731.mp4",
  },
  {
    sign: "Happy BirthDay",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_ecb43aa76.mp4",
  },
  {
    sign: "Good Luck",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_e69a33b88.mp4",
  },
  {
    sign: "I Love You",
    video:
      "https://content.clipchamp.com/content-repo/content/previews/cc_e951c21cc.mp4",
  },

  // Add more items as needed
];

function LearnSign() {
  const [learningData, setLearningData] = useState([]);
  console.log(learningData)
  useEffect(() => {
    setLearningData(learnings);
  }, []);

  return learningData.length === 0 ? (
    <LearningShimmer />
  ) : (
    <>
      <div className="flex flex-wrap gap-2 md:gap-10 text-center md:w-full mt-10">
        {learningData.map((learning, index) => (
          <div key={index} className="w-40 md:w-1/6 mx-auto">
            <HoverVideoPlayer
              videoSrc={learning.video}
              pausedOverlay={
                <div className="bg-black/25 flex items-center justify-center h-full text-center text-white font-thin md:font-bold">
                  <div className="text-lg md:text-3xl text-balance">
                    {learning.sign}
                  </div>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default LearnSign;
