import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import { styles } from "../styles"
import { github, link } from "../assets"
import SectonWrapper from "../hoc/SectionWrapper"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"

const ProjectCard = ({ index, name ,description, tags, image, source_code_link, demo_link }) => {
  const [isDemo, setIsDemo] = useState(false)

  useEffect( () => {
    setIsDemo(!isEmpty(demo_link))
  }, [])

  return (
    <motion.div varients={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center 
              items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            <div
              onClick={() => window.open(demo_link, "_blank")}
              className={`${!isDemo ? 'hidden' : 'flex'} white-gradient w-10 h-10 border-black rounded-full justify-center 
              items-center cursor-pointer ml-2`}
            >
              <img
                src={link}
                alt="link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
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
  )
}


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          My abilities and experience are demonstrated in the projects that follow with instances of my work from the actual world.
          Each project has a brief description, links to code sources, and the most of them have live demos.
          It displays my capacity to handle various technologies, handle complicated problems, and efficiently manage projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

function isEmpty(value) {
  return value === undefined || value === null || value === '';
}

export default SectonWrapper(Works, "")