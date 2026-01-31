import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring")}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="
                w-10 h-10 rounded-full
                flex justify-center items-center cursor-pointer
                bg-black/70 backdrop-blur
                ring-1 ring-white/20
                shadow-lg
                hover:bg-black/85
                transition
              "
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
          {live_demo_link && (
            <a
              href={live_demo_link}
              target="_blank"
              rel="noreferrer"
              className="
                mt-3 inline-block
                text-[15px] font-semibold
                text-white
                underline underline-offset-4
                decoration-white/30
                hover:decoration-white
                transition
              "
            >
              Live Demo ↗
            </a>
          )}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p variants={fadeIn("", "", 0.1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
      <div className="w-full flex">
        <motion.div
          variants={fadeIn("", "", 0.15)}
          className="
            mt-6
            max-w-3xl
            rounded-xl
            border border-white/10
            bg-white/5
            px-5 py-4
          "
        >
          <p className="text-secondary text-[15px] leading-[26px]">
            Additional projects are currently in development and scheduled for
            completion by <span className="text-white font-medium">May 2026</span>,
            with a focus on <span className="text-white">NLP</span>,{" "}
            <span className="text-white">advanced machine learning</span>, and{" "}
            <span className="text-white">model deployment</span>.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
