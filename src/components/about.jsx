import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import "../css/About.css";

export default function About() {
    const isDesktop = () => {
        return window.innerWidth > 768; // Change the threshold to match your desired desktop width
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["60vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0, 1], [-0.2, 1]);

    const imageAnimation = useAnimation();

    return (
        <motion.div className="about-container"
            ref={ref}
            style={{
                opacity: scalP,
            }}
        >
            <div className="about-content">
                <div className="left-section">
                    <div className='content'>

                        <h2>// About Me</h2>
                        <p>
                            Hi, I'm <span id='coding-sign'> &lt; </span> <span id='oussama-fannah'> Oussama Fannah </span><span id='coding-sign'> /&gt; </span>, a 21-year-old Back-End / Full Stack Developer from Morocco. I'm passionate about coding and specialize in creating seamless digital experiences. Eager to apply my skills to innovative projects, I'm seeking fresh opportunities that value collaboration and growth.                    </p>
                        <p>
                            Proficient in various programming languages and frameworks, I love crafting user-centric, visually captivating digital solutions. I believe technology offers transformative solutions for real-world problems.                    </p>
                        <p>
                            Excited about new collaborations, let's connect to explore potential opportunities together. Feel free to explore my portfolio to see some of my work.
                        </p>
                    </div>
                </div>
                <div className="right-section">
                    <div className='content'>

                        <div className='skills'>
                            <h2>// Skills</h2>
                            <div className="skills-langs">
                                <div class="s-langs">
                                    JavaScript
                                </div>
                                <div class="s-langs">
                                    React JS
                                </div>
                                <div class="s-langs">
                                    Node JS / expresse  
                                </div>
                                <div class="s-langs">
                                    PHP
                                </div>
                                <div class="s-langs">
                                    LARAVEL
                                </div>
                                <div class="s-langs">
                                    My Sql
                                </div>
                                <div class="s-langs">
                                    Mongo DB
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
}
