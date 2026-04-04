import React from 'react';
import 'animate.css/animate.min.css';
import Tilt from 'react-parallax-tilt';
// import ScrollAnimation from 'react-animate-on-scroll';

import classes from './Projects.module.css';
import bookheap from '../images/bookheap.png';
import chess from '../images/chess.png';
import shopping from '../images/shopping-app.png';
import definition from '../images/definition.png';
import memes from '../images/memes.png';
import superhero from '../images/superhero.png';
import monorepo from '../images/monorepo.png';
import profilee from '../images/profilee.png';
import courseApp from '../images/courseApp.png';
import chatGPT from '../images/chatGPT.png';
import challenges from '../images/frontend-challenges.png';
import github from '../images/github.png';
import frontenddev from '../images/frontenddev.png';
import solanaaid from '../images/solanaaid.png';
import jumpstart from '../images/jumpstart.png';

import edfoci from '../img/edfoci.png';
import sanasa from '../img/sanasa.png';
import bizassist from '../img/bizassist.png';
import bizassist2 from '../img/bizassist2.png';
import travel from '../img/travel.png';
import airecipe from '../img/airecipe.png';

// Web projects
const webItem = [
  {
    link: 'https://dev.edfoci.com/',
    title: 'Edfoci Student Management System',
    techStack: 'Tech Stack: React Js, Flask Python, PostgreSQL, Socket.io',
    desc: 'Edfoci is a student management system for schools and colleges. It has features like attendance management, online classes, online exams, and much more.',
    image: edfoci,
    color: '#E5E483',
    githubLink: 'https://github.com/RandikaVS/Edfoci-chat-server'
  },
  {
    link: 'https://sanasa-web-service-783407895613.us-west2.run.app/auth/jwt/login?returnTo=%2Fdashboard%2Fquatation%2Flist',
    title: 'Sanasa Bank Insurance Management System',
    techStack: 'Tech Stack: React Js, Node Js, Express, MongoDB, DCP, Docker, Github Actions',
    desc: 'Insurance management system for Sanasa bank. It has features like policy management, claim management, document share and much more.',
    image: sanasa,
    color: '#0FFFFF',
    githubLink: 'https://github.com/RandikaVS'
  },
  {
    link: '#',
    title: 'Biz Assist - Business Management Tool + Whatsapp Bot',
    techStack:
      'Tech Stack: Next.js, FastAPI, PostgreSQL, Docker, Github Actions, Webhooks',
    desc: 'A SaaS product for small businesses to manage their customers, appointments, and payments. It has features like customer management, appointment scheduling, payment management, and much more.',
    image: bizassist2,
    color: '#D2E0FB',
    githubLink: 'https://github.com/RandikaVS/Whatsapp-Chatbot'
  },
  {
    link: 'https://dees-international-web-service-prod-872504844378.us-west2.run.app/',
    title: 'Travel Mate',
    techStack: 'Tech Stack: React Js, Flask Python, PostgreSQL, Socket.io, Tailwind CSS',
    desc: 'A travel log application tourism company can use to manage their customers and bookings. It has features like booking management, customer management, and much more.',
    image: travel,
    color: '#d5ebda',
    githubLink:
      'https://github.com/RandikaVS'
  },
  {
    link: 'https://solanaaid.now.sh/',
    title: 'AI powered Recipe Finder',
    techStack: 'Tech Stack- React Js, Tailwind, OpenAI API, Node Js, Express, MongoDB',
    desc: 'AI powered recipe finder app that helps you find recipes based on ingredients you have. It uses OpenAI API to generate recipes based on the ingredients you provide.',
    image: airecipe,
    color: '#f3e4f1',
    githubLink: 'https://github.com/RandikaVS/AI-Recipe-Generator'
  },
];

const androidAppItems = [
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.your_dictionary',
    title: 'Definition Finder',
    techStack: 'Tech Stack: Flutter',
    desc: 'Definition Finder is absolutely free online dictionary with every word you look up. Millions of definitions from the most trusted source.',
    image: definition,
    color: '#CBD18F',
    githubLink:
      'https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort=stargazers'
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.superheroes',
    title: 'My Superhero',
    techStack: 'Tech Stack- Flutter',
    desc: 'My SuperHero app provides all SuperHeroes and Villians data like powerstats, full name from all the universes.',
    image: superhero,
    color: '#d0f4de',
    githubLink: 'https://github.com/mittalsam98/super_hero_app'
  },
  {
    link: 'https://play.google.com/store/apps/details?id=com.thesachin.memestemplate',
    title: 'Indian Memes Templates',
    techStack: 'Tech Stack- Flutter',
    desc: ' Indian meme templates - Memeशाला contains a wide range of Indian meme templates including Bollywood, political, Indian shows. You can edit and create memes too.',
    image: memes,
    color: '#e9c46a',
    githubLink:
      'https://github.com/mittalsam98?tab=repositories&q=&type=&language=dart&sort=stargazers'
  }
];

export default function Projects() {
  const getProjectCard = (cardItem) => {
    return (
      <Tilt perspective={900} glareEnable={true} glareMaxOpacity={0.45}>
        <li style={{ backgroundColor: cardItem.color, borderRadius: '21px' }}>
          <a href={cardItem.link} className={classes.card} target='_blank'>
            <img src={cardItem.image} className={classes.card__image} alt='' />
          </a>
          <div
            onClick={() => {
              if (cardItem?.githubLink) window.open(cardItem?.githubLink, '_blank');
            }}
            className={classes.card__title__container}
          >
            <h3 className={classes.card__title}>{cardItem.title}</h3>
            {cardItem?.githubLink && <img src={github} className={classes.card__title__img} />}
          </div>
        </li>
      </Tilt>
    );
  };

  return (
    <div className={classes.box} id='projects'>
      {/* <ScrollAnimation
        offset={0}
        animateIn='fadeInLeft'
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      > */}
      <span className={classes.head}>MY WORK</span>
      <h2 className={classes.heading}>WEB APP PROJECTS</h2>
      <ul className={classes.cards}>
        {webItem.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      {/*
      <h2 className={classes.heading}>ANDROID APP PROJECTS</h2>
      <ul className={classes.cards}>
        {androidAppItems.map((item) => {
          return getProjectCard(item);
        })}
      </ul>
      */}
      {/* </ScrollAnimation> */}
    </div>
  );
}
