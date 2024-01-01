import React, { useState ,useEffect } from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCplusplusbuilder,
  SiPython,
  SiAmazondocumentdb,
  SiMongodb,
  SiLinux,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key={"swarup"}/>,
          <FaCss3 key={"mindri"} />,
          <FaJs key={"lowde"}/>,
          <FaReact key={"hello"} />,
          <SiNextdotjs key={"en"} />,
          <SiFramer key={"samachara"}/>,
        ],
      },
      {
        title: "Data Stack Hub",
        icons: [
          <SiCplusplusbuilder key={"mami"}/>,
          <SiPython key={"sanjana_swarup"}/>,
          <SiAmazondocumentdb key={"amogh_roxxstar"}/>,
          <SiMongodb key={"akshay"} />,
          <SiLinux key={"rags"} />,
        ],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "VVS SARDAR PATEL HIGH SCHOOL",
        stage: "2018-2020",
      },
      {
        title: "VVS SARDAR PATEL PU COLLEGE",
        stage: "2018-2020",
      },
      {
        title: "PES UNIVERSITY-Btech-ECE",
        stage: "2020-2024",
      },
      
    ],
  },
  {
    title: "Certification",
    info: [
      {
        title: "Web Development - CISCO Thinqbator ",
        stage: "2022",
      },
      {
        title: "Codehelp-Web Development",
        stage: "2022",
      },
      {
        title: "Master SQL for Data Science",
        stage: "2023",
      },
    ],
  },
];
//framer-motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  const [countersLoaded, setCountersLoaded] = useState(false);

  useEffect(() => {
    // Set countersLoaded to true after the initial render
    setCountersLoaded(true);
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar/> */}
      </motion.div>
      <div
        className="container mx-auto h-full flex flex-col items-center xl:flex-row 
      gap-x-6"
      >
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 md:text-5xl"
          >
            Mastering cutting edge{" "}
            <span className="text-accent">technology </span>tools
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] hidden md:block mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            In the past few years, I delved into various projects involving both
            electronics and computer science. This helped me build a
            well-rounded skill set with a good understanding of these domains.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={
              countersLoaded ? fadeIn("right", 0.6) : { hidden: { opacity: 0 } }
            }
            initial="hidden"
            animate={countersLoaded ? "show" : "hidden"}
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projects
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
              after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  resolved coding challenges with precision
                </div>
              </div>
              <div
                className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0
              after:right-0"
              >
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={17} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Skill Badges Earned
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className=" flex flex-col w-full xl:max-w-[48%] h-[20rem] z-10">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col justify-between gap-y-2 cl:gap-y-4 items-start xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className=" flex flex-col justify-center text-center md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="text-center">{item.stage}</div>
                  <div className="flex gap-x-4 text-center">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div 
                      key={"amogh" + itemIndex}
                      className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
            <a href="https://drive.google.com/file/d/1kQEi7ENSV6G8Ktc3n4b9qUDXV2doUVVM/view?usp=sharing" target="_blank" download>
              <button className="bg-red-500 hover:bg-white hover:text-red-500 w-auto text-white px-9 py-2 shadow-md text-lg cursor-pointer transition-all duration-500 font-medium border-3 border-transparent relative z-10 mt-auto self-start  ">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
