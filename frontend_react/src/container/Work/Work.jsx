import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';

const Work = () => {
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
    <div id='work'>
      <h2 className="head-text">My <span>Projects</span> That I've Built</h2>

      {/* <div className="app__work-filter">
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div> */}

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-list"
      >
        {filterWork.map((work, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, type: 'tween' }}
            className="app__work-horizontal-card"
            key={index}
          >
            <div className="card-image">
              <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div>

            <div className="card-content">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text">{work.description}</p>

              <div className="tech-stack">
                {work.tags?.map((tag, i) => (
                  <span className="tech-tag" key={i}>{tag}</span>
                ))}
              </div>

              <div className="card-links">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={work.projectLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillEye />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  href={work.codeLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg',
);
