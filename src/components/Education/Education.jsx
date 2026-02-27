import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_5}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Professional Experience</h2>

                      <div className={classes.paraWithSubheading}>
                        <div className={classes.subHeading}>
                          - Software Engineer (Associate) | Infinity Innovators (Dec 2024 – Present)
                        </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            Building scalable web applications using React, Node.js, and Python Flask.
                          </div>
                          <div className={classes.description}>
                            Developed secure REST APIs with JWT authentication and role-based access control.
                          </div>
                          <div className={classes.description}>
                            Worked with Google Cloud, CI/CD pipelines, and real-time systems using Socket.io.
                          </div>
                        </div>
                      </div>

                      <div className={classes.paraWithSubheading}>
                        <div className={classes.subHeading}>
                          - Software Engineer (Intern → Trainee) | Infinity Innovators (Jun 2023 – Dec 2024)
                        </div>
                        <div className={classes.points}>
                          <div className={classes.description}>
                            Developed reusable React components improving maintainability and delivery speed.
                          </div>
                          <div className={classes.description}>
                            Implemented backend APIs and collaborated in Agile sprints for production systems.
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                    <article className={classes.timeline_entry}>
                      <div className={classes.timeline_icon}>
                        <MdSchool />
                      </div>
                      <div className={classes.label}>
                        <h2>
                          BSc (Hons) Information Technology – Software Engineering
                          <span> 2020 – 2024</span>
                        </h2>
                        <div className={classes.description}>
                          Sri Lanka Institute of Information Technology (SLIIT) – WCGPA: 3.00/4.00
                        </div>
                        <div className={classes.description}>
                          Final Year Research: ROS-based Multi-Robot Area Coverage using Spiral &
                          Boustrophedon Path Planning Algorithms.
                        </div>
                      </div>
                    </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2015-2017</span>
                      </h2>
                      <div className={classes.description}>
                        I have completed my higher education from Mahinda Rajapakshe Collage with major subjects as
                        Science for Technology, Engineerign Technology, Information Technology.{' '}
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Key Projects</h2>
                      <div className={classes.description}>
                        Developed a Real-Time Chat Server using Node.js, Express, Socket.io, and MongoDB with JWT authentication.
                      </div>
                      <div className={classes.description}>
                        Built AI Recipe Generator using React + OpenAI API deployed on Google Cloud.
                      </div>
                      <div className={classes.description}>
                        Delivered Student Management and Assurance Quotation Systems for real clients.
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
