// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";
import "./App.css";
// import model from "./model.json"
import { nextFrame } from "@tensorflow/tfjs";
// 2. TODO - Import drawing utility here
// e.g. import { drawRect } from "./utilities";
import { drawRect } from "./utilities";
import { IoCameraReverseOutline } from "react-icons/io5";

const COCO_CLASSES = ["namaste", "hello"];
const videoConstraintsEnvironment = {
  // width: 1280,
  // height: 720,
  facingMode: "environment",
};
const videoConstraintsUser = {
  // width: 1280,
  // height: 720,
  facingMode: "user",
};
function App() {
  // const [detectedObject, setDetectedObject] = useState("");

  const [activeCamera, setActiveCamera] = useState(videoConstraintsUser);

  const toggleCamera = () => {
    setActiveCamera((prevCamera) =>
      prevCamera === videoConstraintsUser
        ? videoConstraintsEnvironment
        : videoConstraintsUser
    );
  };
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // Main function
  const runCoco = async () => {
    // 3. TODO - Load network
    // e.g. const net = await cocossd.load();
    // https://tensorflowjsrealtimemodel.s3.au-syd.cloud-object-storage.appdomain.cloud/model.json
    //https://raw.githubusercontent.com/omkarguravv/i-hear-you/main/model/test.json
    //https://raw.githubusercontent.com/omkarguravv/i-hear-you/main/model/model.json
    const net = await tf.loadGraphModel(
      "https://raw.githubusercontent.com/omkarguravv/i-hear-you/main/model/model.json"
    );

    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 16.7);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4 &&
      typeof canvasRef.current !== "undefined" &&
      canvasRef.current !== null
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
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast("int32");
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      // console.log(obj)

      const boxes = await obj[6].array();
      const classes = await obj[5].array();
      const scores = await obj[1].array();

      
      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

      // 5. TODO - Update drawing utility
      // drawSomething(obj, ctx)
      requestAnimationFrame(() => {
        drawRect(
          boxes[0],
          classes[0],
          scores[0],
          0.8,
          videoWidth,
          videoHeight,
          ctx
        );
      });

      tf.dispose(img);
      tf.dispose(resized);
      tf.dispose(casted);
      tf.dispose(expanded);
      tf.dispose(obj);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);

  return (
    <>
      <div className=" flex flex-col w-full jusitify-center">
        <header>
          <Webcam
            // className=" left-0 right-0 mx-auto absolute z-9 text-center w-[640px] h-[480px]"
            ref={webcamRef}
            muted={true}
            // facingMode={activeCamera}
            videoConstraints={activeCamera}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 8,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            // className="hidden left-0 right-0  mx-auto absolute z-8 text-center w-[640px] h-[480px]"
            ref={canvasRef}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
        </header>

        <div
          style={{
            position: "relative",
            marginTop: "auto",
            marginBottom: "auto",
            top: 0,
            bottom: 0,
            textAlign: "center",
            zindex: 10,
          }}
          
        >
          <button
            className="mt-0 md:mt-30 inline-flex items-center gap-1 group/button rounded-full hover:scale-105 focus:outline-none transition ring-offset-gray-900 bg-black shadow-xl shadow-black/20 ring-1 [&:not(:focus)]:ring-inset ring-gray-700/30 hover:bg-gray-700/70 focus:ring-gray-600 focus:ring-offset-2 text-base font-medium px-5 py-2.5 justify-center text-white"
            onClick={toggleCamera}
          >
            <IoCameraReverseOutline width={20} />

            Toggle Camera
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
