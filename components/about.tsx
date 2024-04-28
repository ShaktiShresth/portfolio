"use client";

import SectionHeading from "./section-heading";
import { motion } from 'framer-motion'
import { useSectionInView } from "@/lib/hooks";

const About = () => {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            className="mb-28 sm:mb-40 max-w-[45rem] leading-8 scroll-mt-28 text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 1 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading >About Me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">BSc. IT</span>, I decided to pursue my
                passion for programming. I enrolled in a web development course and learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React, Node.js, Express.js and MongoDB
                </span>
                . I am always looking to learn new technologies. I'd like to learn{" "}
                <span className="font-medium">TypeScript & Next.js</span>{" "}
                in the future. I am currently looking for a{" "}
                <span className="font-medium">job</span> to get started with my career.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing football. I also enjoy{" "}
                <span className="font-medium">learning new things</span>.
            </p>
        </motion.section>
    )
}

export default About