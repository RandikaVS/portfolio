import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import classes from './Carousel.module.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import { GoProject } from 'react-icons/go';
import { FaArrowCircleDown } from 'react-icons/fa';
import Hello from '../images/Hello.jpg';
import Pencil from '../images/Pencil.jpg';
import { motion } from 'framer-motion';

export default function CarouselImage() {
  return (
    <div id="start">
      <Carousel
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div className={classes.carouselSlide}>
          <img className={classes.image} src={Hello} alt="myImage" />
          <div className={classes.overlay}></div>
          <div className={classes.h1}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={classes.heroTitle}>Hi, I'm Sahan Randika</h1>
              <p className={classes.heroSubtitle}>
                Software Engineer | Full Stack Developer
              </p>
            </motion.div>
            
          </div>
          <div className={classes.cv}>
          <motion.h1
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3.3, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
              className={classes.ctaButton}
            >
              <a
                href="https://drive.google.com/file/d/1X-i5HA9SzKKnNHCFcupGxq_RFu7fwcil/view?usp=drive_link"
                rel="opener noreferrer"
                target="_blank"
                className={classes.ctaLink}
              >
                VIEW CV <FaArrowCircleDown className={classes.ctaIcon} />
              </a>
            </motion.h1>
            </div>
        </div>
        {/* <div className={classes.carouselSlide}>
          <img className={classes.image} src={Pencil} alt="myImage" />
          <div className={classes.overlay}></div>
          <div className={classes.h2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className={classes.buildTitle}>I love building</h1>
              <h1 className={classes.buildEmphasis}>AMAZING THINGS!!</h1>
            </motion.div>
            <div className={classes.buttonGroup}>
              <a
                href="https://github.com/mittalsam98?tab=repositories&q=&type=public&language=&sort="
                rel="opener noreferrer"
                target="_blank"
                className={classes.projectButton}
              >
                VIEW WEB PROJECTS <GoProject />
              </a>
              <a
                href="https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort="
                rel="opener noreferrer"
                target="_blank"
                className={`${classes.projectButton} ${classes.secondButton}`}
              >
                VIEW MOBILE PROJECTS <GoProject />
              </a>
            </div>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
