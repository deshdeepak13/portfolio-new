import React from "react";
// import data from "../assets/data.json";
import "./experience.css"

const Experience = () => {
  return (
    <div id="timeline" className="w-full h-[100vh]">
      <div className="timelineBox w-full relative max-w-[1200px] my-0 mx-auto flex flex-col justify-center h-full after:bg-gray-600">
        
          <TimelineItem
            heading="Project1"
            text="{23/12/1111}"
            index={0}
            // key={item.title}
          />

          <TimelineItem
            heading="Project1"
            text="{23/12/1111}"
            index={1}
            // key={item.title}
          />
          <TimelineItem
            heading="Project1"
            text="{23/12/1111}"
            index={2}
            // key={item.title}
          />
          <TimelineItem
            heading="Project1"
            text="{23/12/1111}"
            index={3}
            // key={item.title}
          />
          
          

          
      </div>
      
    </div>
  );
};

const TimelineItem = ({ heading, text, index }) => (
  <div
    className={`after:bg-white after:dark:bg-gray-900 after:border-gray-600 timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div className="bg-gray-600 text-white">
      <h2>{heading}</h2>
      <p>{text}</p>
    </div>
  </div>
);

export default Experience;
