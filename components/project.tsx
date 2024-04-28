"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from '@/lib/data';
import Link from 'next/link';

type ProjectProps = (typeof projectsData)[number];

function Project({
    title,
    description,
    tags,
    imageUrl,
    liveDemoLink
}: ProjectProps) {

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return <motion.div
        className='group mb-3 sm:mb-8 last:mb-0'
        ref={ref}
        style={{
            scale: scaleProgess,
            opacity: opacityProgess
        }}
    >
        <section
            className='bg-gray-100 max-w-[42rem] borderBlack/5 rounded-lg overflow-hidden 
                        sm:pr-8 relative sm:h-[20rem]
                        hover:bg-gray-200 transition
                        sm:group-even:pl-8
                        dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
            <div className="pt-4 pb-7 px-5 py-4 
                            sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]
                            flex flex-col h-full 
                            sm:group-even:ml-[18rem] sm:group-odd:mr-[18rem]">
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 text-gray-700 leading-relaxed 
                            dark:text-white/70'>{description}</p>
                <ul className='mt-4 sm:mt-2 flex flex-wrap gap-2'>
                    {tags.map((tag, index) => (
                        <li
                            className='px-3 py-1 uppercase bg-black/[0.7] text-white text-[0.7rem] tracking-wider rounded-full
                                    dark:text-white/70'
                            key={index}>{tag}</li>
                    ))}
                </ul>
            </div>

            <Link href={liveDemoLink} target='_blank'>
                <Image
                    className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                            group-even:right-[initial] group-even:-left-40
                            transition
                            group-hover:scale-[1.04]
                            group-hover:-translate-x-3
                            group-hover:translate-y-3
                            group-hover:-rotate-2
                                            
                            group-even:group-hover:translate-x-3
                            group-even:group-hover:translate-y-3
                            group-even:group-hover:rotate-2
                            
                            hover:cursor-pointer'
                    src={imageUrl}
                    alt='Project I worked on'
                    quality={95}
                    title='Click Me for Live Demo'
                />
            </Link>
        </section>
    </motion.div>
}

export default Project