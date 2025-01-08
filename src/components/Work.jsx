import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowUpRight,BsChevronDown  } from "react-icons/bs";
// import "./work.css"

const Work = () => {
  return (
    <div id="work" className="mt-20">
      <h1 className="work w-full flex justify-center text-3xl underline underline-offset-[10px] font-semibold my-5 tracking-wider decoration-[2px] decoration-green-600 dark:text-white">
        WORK
      </h1>
      <article className="mx-20 mt-20 py-20 bg-gray-600">  
        <Carousel
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
          interval={1100}
          infiniteLoop={true}
          autoPlay={true}
        >
          <div className="workItem flex justify-between py-5 mx-20 px-10 items-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1)]">
            <div className="w-[40%] rounded-xl flex justify-center items-center "><img
              src="download.jpg"
              alt=""
              className="w-full object-cover rounded-xl"
            /></div>
            <div className="w-[40%] flex-col flex gap-5">
              <h3 className="text-xl font-bold ">Holonomic Omni WebBot</h3>
              <p className="text-md tracking-widest ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque veritatis quae. Nulla accusantium ex amet voluptatibus vitae dicta, nobis omnis nesciunt, soluta doloremque totam at delectus, odio fuga voluptatem vel laboriosam </p>
              <a target={"blank"} href="" className="bg-green-600 py-2 px-2 rounded text-white font-semibold hover:scale-105 flex justify-center gap-1 items-center ">
                View Demo<BsArrowUpRight/>
              </a>
            </div>
          </div>
          <div className="workItem flex justify-between py-5 mx-20 px-10 items-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1)]">
            <div className="w-[40%] rounded-xl flex justify-center items-center "><img
              src="download.jpg"
              alt=""
              className="w-full object-cover rounded-xl"
            /></div>
            <div className="w-[40%] flex-col flex gap-5">
              <h3 className="text-xl font-bold ">Holonomic Omni WebBot</h3>
              <p className="text-md tracking-widest ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque veritatis quae. Nulla accusantium ex amet voluptatibus vitae dicta, nobis omnis nesciunt, soluta doloremque totam at delectus, odio fuga voluptatem vel laboriosam </p>
              <a target={"blank"} href="" className="bg-green-600 py-2 px-2 rounded text-white font-semibold hover:scale-105 flex justify-center gap-1 items-center ">
                View Demo<BsArrowUpRight/>
              </a>
            </div>
          </div>
          <div className="workItem flex justify-between py-5 mx-20 px-10 items-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1)]">
            <div className="w-[40%] rounded-xl flex justify-center items-center "><img
              src="download.jpg"
              alt=""
              className="w-full object-cover rounded-xl"
            /></div>
            <div className="w-[40%] flex-col flex gap-5">
              <h3 className="text-xl font-bold ">Holonomic Omni WebBot</h3>
              <p className="text-md tracking-widest ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque veritatis quae. Nulla accusantium ex amet voluptatibus vitae dicta, nobis omnis nesciunt, soluta doloremque totam at delectus, odio fuga voluptatem vel laboriosam </p>
              <a target={"blank"} href="" className="bg-green-600 py-2 px-2 rounded text-white font-semibold hover:scale-105 flex justify-center gap-1 items-center ">
                View Demo<BsArrowUpRight/>
              </a>
            </div>
          </div>
          <div className="workItem flex justify-between py-5 mx-20 px-10 items-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1)]">
            <div className="w-[40%] rounded-xl flex justify-center items-center "><img
              src="download.jpg"
              alt=""
              className="w-full object-cover rounded-xl"
            /></div>
            <div className="w-[40%] flex-col flex gap-5">
              <h3 className="text-xl font-bold ">Holonomic Omni WebBot</h3>
              <p className="text-md tracking-widest ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque veritatis quae. Nulla accusantium ex amet voluptatibus vitae dicta, nobis omnis nesciunt, soluta doloremque totam at delectus, odio fuga voluptatem vel laboriosam </p>
              <a target={"blank"} href="" className="bg-green-600 py-2 px-2 rounded text-white font-semibold hover:scale-105 flex justify-center gap-1 items-center ">
                View Demo<BsArrowUpRight/>
              </a>
            </div>
          </div>
          <div className="workItem flex justify-between py-5 mx-20 px-10 items-center bg-white shadow-[0_0_20px_5px_rgba(255,255,255,1)]">
            <div className="w-[40%] rounded-xl flex justify-center items-center "><img
              src="download.jpg"
              alt=""
              className="w-full object-cover rounded-xl"
            /></div>
            <div className="w-[40%] flex-col flex gap-5">
              <h3 className="text-xl font-bold ">Holonomic Omni WebBot</h3>
              <p className="text-md tracking-widest ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eaque veritatis quae. Nulla accusantium ex amet voluptatibus vitae dicta, nobis omnis nesciunt, soluta doloremque totam at delectus, odio fuga voluptatem vel laboriosam </p>
              <a target={"blank"} href="" className="bg-green-600 py-2 px-2 rounded text-white font-semibold hover:scale-105 flex justify-center gap-1 items-center ">
                View Demo<BsArrowUpRight/>
              </a>
            </div>
          </div>

          
        </Carousel>
      </article>
    </div>
  );
};

export default Work;
