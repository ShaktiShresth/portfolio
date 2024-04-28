"use client";

import Image from "next/image";
import { motion } from 'framer-motion';
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <section
            ref={ref}
            className="max-w-[50rem] mb-28 sm:mb-0 scroll-mt-[10rem]"
            id="home"
        >
            <div className="flex justify-center items-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}>
                        <Image
                            className="size-24 border-[0.35rem] border-white rounded-full
                            shadow-xl object-cover"
                            src="https://avatar.iran.liara.run/public/36"
                            height='192'
                            width='192'
                            quality='95'
                            priority={true}
                            alt="Shakti's portrait"
                        />
                    </motion.div>
                    <motion.span
                        className="text-2xl absolute right-0 bottom-0"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}>🙏</motion.span>
                </div>
            </div>

            <motion.h1
                className="mt-4 mb-10 px-4 text-center text-xl font-medium !leading-[1.5] sm:text-2xl lg:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                <span className="font-bold">Hello, I'm Shakti.</span> I'm a{" "}
                <span className="font-bold">front-end developer</span> with an interest in{" "}
                <span className="font-bold">web development</span>. I enjoy
                building <span className="italic">sites & apps</span>. My focus right now is{" "}
                <span className="underline">React (Next.js)</span><span className="animate-ping transition-all mx-1">.</span>
            </motion.h1>

            <motion.div
                className="flex flex-col sm:flex-row gap-2 justify-center items-center px-4 text-md font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}>
                <Link
                    href="#contact"
                    className="group px-7 py-3 text-white bg-gray-900 flex gap-2 items-center rounded-full
                    outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now())
                    }}
                >
                    Contact me here{" "}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                </Link>

                <a
                    className="group p-4 bg-white flex gap-2 items-center rounded-full
                    outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10"
                    href="/CV.pdf"
                    download
                >
                    Download CV{" "}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>

                <a
                    className="p-4 text-gray-700 bg-white flex gap-2 items-center rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/50"
                    href="https://www.linkedin.com/in/shakti-shrestha"
                    target="_blank"
                >
                    <BsLinkedin />
                </a>

                <a
                    className="p-4 text-gray-700 bg-white flex gap-2 items-center rounded-full
                    focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer
                    borderBlack dark:bg-white/10 dark:text-white/60 dark:hover:text-white/50"
                    href="https://github.com/ShaktiShresth"
                    target="_blank"
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}

export default Intro;