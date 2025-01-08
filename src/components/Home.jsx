import React,{useRef} from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { animate, motion } from "framer-motion";
import { BsArrowUpRight,BsChevronDown  } from "react-icons/bs";

const Home = () => {
    const problemCount = useRef(null);
  const projectCount = useRef(null);
  const animationProblemCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (problemCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  
  const animations = {
    div: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (<>
    <div id="home" className="mt-24 flex ">
      <div className="content pl-20">
        <motion.div {...animations.div} className="name text-6xl font-bold dark:text-white">
          Hi, I am <br /> DeshDeepak Verma.{" "}
        </motion.div>
        <div className="typewriter text-2xl pt-4 tracking-[7px] flex dark:text-white">
          A &nbsp;
          <Typewriter
            options={{
              strings: ["Developer", "Designer", "Creator"],
              autoStart: true,
              loop: true,
              cursor: "|",
              wrapperClassName: "typewriterpara",
            }}
          />
        </div>

        <div className="mt-40 flex gap-6 transition-all">
            <button className="px-6 py-3 bg-green-600 text-white font-semibold hover:opacity-80">Hire Me

            </button>
            <button className="px-6 py-3 border border-green-600 font-semibold  hover:scale-105 flex items-center gap-2 dark:text-white">Projects <BsArrowUpRight/>

            </button>
        </div>

        <div className="mt-20 reach flex justify-around text-lg dark:text-white">

        <div className="flex">
            <p className="font-bold text-2xl">
              +
                <motion.span
                  whileInView={animationProblemCount}
                  ref={problemCount}
                ></motion.span>
            </p>
            <span>&nbsp;Problems Solved</span>
          </div>


        <div className="flex">
            <p className="font-bold text-2xl">
              +<motion.span
                  whileInView={animationProjectCount}
                  ref={projectCount}
                ></motion.span>
            </p>
            <span>&nbsp;Projects Made</span>
          </div>
            
        </div>




      </div>

      <div className="me relative">
        <img
          className="h-[50vmax] w-[50vmax] object-contain z-10"
          src="360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="downanim flex items-ends pr-20 flex-col">
      <div className="down1"><BsChevronDown/></div>
      <div className="down2"><BsChevronDown/></div>
      <div className="down3"><BsChevronDown/></div>
      </div>
    </div>
    
    </>
  );
};

export default Home;
