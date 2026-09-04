import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I Am and What I Build</p>
        <h2 className={styles.sectionHeadText}>Turning Data into Practical Solutions</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a data scientist with a background in computer information systems. I
        enjoy investigating complex problems and developing reliable, data-driven
        solutions.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.2, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        <p>My strengths include:</p>

        <ul className="mt-2 ml-6 list-disc space-y-1">
          <li>Statistical analysis and machine learning</li>
          <li>Python, R, SQL, and Power BI</li>
          <li>Data preparation, modelling, evaluation, and deployment</li>
          <li>Communicating findings to technical and nontechnical audiences</li>
        </ul>
      </motion.p>

     <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My most comprehensive project is{" "}
        <a
          href="https://customer-churn-senior-proj.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white hover:text-[#915EFF] transition-colors"
        >
          ChurnIQ
        </a>
        , an end-to-end machine learning application that identifies telecom
        customers at risk of churning. I built the complete ML pipeline, including
        data validation, feature engineering, model comparison, hyperparameter
        tuning, experiment tracking, and deployment. Its optimized{" "}
        <span className="font-semibold text-white">XGBoost model</span> achieved{" "}
        <span className="font-semibold text-white">82.1% recall</span> and is served
        through a FastAPI backend and React interface, with Docker, MLflow, and
        GitHub Actions supporting deployment and automation.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.3, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My client-facing sales experience has strengthened my ability to understand
        customer needs, communicate value, build trust, and perform in results-driven
        environments. I bring this combination of technical thinking and business
        awareness to every problem I work on.
      </motion.p>

      <motion.p
        variants={fadeIn("", "", 0.5, 1)}
        className="mt-5 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am seeking research and data science opportunities where I can explore
        meaningful questions, build practical solutions, and turn evidence into
        better decisions.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;