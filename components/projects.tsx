"use client";

import React from 'react';
import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';

const Projects = () => {
    const { ref } = useSectionInView("Projects", 0.5);

    return (
        <section
            ref={ref}
            id='projects'
            className='mb-28 sm:mb-40 scroll-mt-28'>
            <SectionHeading>My projects</SectionHeading>
            <div>
                {
                    projectsData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}


export default Projects;

