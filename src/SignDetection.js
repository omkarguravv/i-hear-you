// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";

// 1. TODO - Import required model here
// e.g. import * as tfmodel from "@tensorflow-models/tfmodel";
import Webcam from "react-webcam";
import "./App.css";
import { drawrect } from "./utilities";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";

function SignDetection() {
  const [objects, setObject] = useState([]);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    const net = await cocossd.load();

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // 4. TODO - Make Detections
      // e.g. const obj = await net.detect(video);
      const obj = await net.detect(video);
      //   console.log(obj);
      setObject(obj);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      drawrect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <>
      <div className=" flex w-full jusitify-center items-center">
        <header className="w-1/2">
          <Webcam
          className=" m-auto z-10"
            ref={webcamRef}
            muted={true}
            // style={{
            //   position: "absolute",
            //   marginLeft: "auto",
            //   marginRight: "auto",
            //   left: 0,
            //   right: 0,
            //   textAlign: "center",
            //   zindex: 9,
            //   width: 640,
            //   height: 480,
            // }}
          />

          <canvas
          className="hidden m-auto z-10"
            ref={canvasRef}
            // style={{
            //   position: "absolute",
            //   marginLeft: "auto",
            //   marginRight: "auto",
            //   left: 0,
            //   right: 0,
            //   textAlign: "center",
            //   zindex: 8,
            //   width: 640,
            //   height: 480,
            // }}
          />
        </header>
        <div className="w-1/2 text-center">
          {objects.map((object, index) => (
            <div key={index}>
              <p className="text-7xl"> Word: {object.class}</p>
              {/* <p>Bbox: x={object.bbox[0]}, y={object.bbox[1]}, width={object.bbox[2]}, height={object.bbox[3]}</p> */}
              {/* <p>Confidence Score: {object.score}</p> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SignDetection;
