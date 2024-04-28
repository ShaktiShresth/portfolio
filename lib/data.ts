import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mernBlog from "@/public/mern-blog.png";
import chatApp from "@/public/chat-app.png";
import realEstate from "@/public/real-estate.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Completed +2",
    location: "Baneshwor, Kathmandu",
    description:
      "I accomplished my +2 (Physics) studies from Liverpool International College.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2018",
  },
  {
    title: "Graduated with a Bachelor's degree",
    location: "Tinkune, Kathmandu",
    description:
      "I completed BSc (Hons) Computer Systems Engineering (BSc. IT) at ISMT which is delivered through BTEC HND and from the University of Sunderland, UK.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Enrolled a MERN bootcamp",
    location: "Shankhamul, Kathmandu",
    description:
      "I gained an understanding of fullstack with a MERN course provided by Vrit Technologies for about 3 months.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    title: "Work",
    location: "-",
    description:
      "No real world work experience yet.",
    icon: React.createElement(CgWorkAlt),
    date: "-",
  },
] as const;

export const projectsData = [
  {
    title: "Blog App",
    description:
      "A MERN stack app where authorized admin users have privilege to create, post & edit their personal blogs or share them with other users.",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Flowbite", "Tailwind", "Redux"],
    imageUrl: mernBlog,
    liveDemoLink: "https://mern-blog-x3mn.onrender.com"
  },
  {
    title: "Chat App",
    description:
      "A simple real time chat app to communicate among its authenticated users.",
    tags: ["React", "socket.io", "Node.js", "Express.js", "MongoDB", "Tailwind", "zustand"],
    imageUrl: chatApp,
    liveDemoLink: "https://chat-app-6an2.onrender.com"
  },
  {
    title: "Real Estate App",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Node.js", "Express.js", "Mongodb", "Firebase", "Tailwind", "Redux"],
    imageUrl: realEstate,
    liveDemoLink: "https://mern-realestate-d23k.onrender.com"
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Framer Motion",
] as const;
