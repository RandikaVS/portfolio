import React from "react";
import classes from "./About.module.css";
import "animate.css/animate.min.css";

export default function About() {
  return (
    <div className={classes.box} id="about">
      <span className={classes.head}>ABOUT ME</span>
      <h2 className={classes.heading}>Who Am I?</h2>
      <div className={classes.About}>
        <p>
          Hi! My name is <b>Sahan Randika</b>. I am a passionate software
          engineer with expertise in <b>Full Stack Development</b>,{" "}
          <b>Mobile App Development</b>, and <b>Cloud Technologies</b>. I love
          building innovative solutions that solve real-world problems and
          create exceptional user experiences.
        </p>
        <p className={classes.br}>
          I'm constantly exploring new technologies and staying ahead of
          industry trends. My approach focuses on writing clean, maintainable
          code and creating scalable architectures. With a strong foundation in
          both frontend and backend development, I bring ideas to life through
          elegant code and thoughtful design.
        </p>
      </div>
    </div>
  );
}
