import React from "react";

function LearningShimmer() {
  return (
    <div>
      <div className="flex shadow flex-wrap gap-10 justify-center mx-10 mt-10">
        {Array(21).fill("").map((idx)=>{
            <div key={idx} className="animate-pulse bg-slate-700 w-44 h-52 rounded-lg ">
   
            </div>

        })}
      </div>
    </div>
  );
}

export default LearningShimmer;
