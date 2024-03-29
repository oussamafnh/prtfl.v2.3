import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import "../css/Home.css";
import image from "../images/3d.png";

function Home() {
    const isDesktop = () => {
        return window.innerWidth > 768; // Change the threshold to match your desired desktop width
    };
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });

    const scalP = useTransform(scrollYProgress, [0.3, 1], [-0.2, 1]);

    const imageAnimation = useAnimation();

    // Logic to control the display of the image based on scroll position
    useEffect(() => {
        if (scrollYProgress.get() === 1) {
            imageAnimation.start({ opacity: 0, x: 50, transition: { duration: 1 } }).then(() => {
                imageAnimation.set({ display: "none" });
            });
        } else {
            imageAnimation.set({ display: "block" });
        }
    }, [scrollYProgress, imageAnimation]);

    return (
        <motion.div
            ref={ref}
            className={`home`}
            style={{
                opacity: scalP,
            }}


        // variants={{
        //         v1: { opacity: 0, x: -200 },
        //         v2: { opacity: 1, x: 0 },
        //     }}
        //     initial={isVisible ? "v1" : "v2"}
        //     animate={isVisible ? "v2" : "v1"}
        //     transition={{ duration: 1 }}
        >
            {/* <div className="home" id="Home" ></div> */}
            <motion.div className="text"
                variants={{
                    v1: { opacity: 0},
                    v2: { opacity: 2},
                }}
                initial="v1"
                animate="v2"
                transition={{ duration: 1 }}
                // style={{
                //     x: isDesktop() ? translateX1 : 0, // Apply x only on desktop
                // }}
            >
                <h1>Hi, I'm Oussama Fannah</h1>
                <p>A Full Stack Developer based in Morocco</p>
                <p>Coding with Passion, Building with Precision</p>
                <img src={image} alt="that me by the ai" srcSet="" />

                <div className="buttons">

                    <button class="noselect noselect1">
                        <span class="text">download my resume</span>
                        <span class="icon">
                            <svg fill="#000000" width="30" height="30" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4,20H20a1,1,0,0,1,0,2H4a1,1,0,0,1,0-2ZM12,2a1,1,0,0,0-1,1V14.586L8.707,12.293a1,1,0,1,0-1.414,1.414l4,4a1,1,0,0,0,.325.216.986.986,0,0,0,.764,0,1,1,0,0,0,.325-.216l4-4a1,1,0,0,0-1.414-1.414L13,14.586V3A1,1,0,0,0,12,2Z" /></svg>
                        </span>
                    </button>
                    <button class="noselect noselect2">
                        <span class="text">Contact </span>
                        <span class="icon">
                            <svg fill="#000000" width="30" height="30" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1920 428.266v1189.54l-464.16-580.146-88.203 70.585 468.679 585.904H83.684l468.679-585.904-88.202-70.585L0 1617.805V428.265l959.944 832.441L1920 428.266ZM1919.932 226v52.627l-959.943 832.44L.045 278.628V226h1919.887Z" fill-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
            </motion.div>
            <motion.div className="image"
                variants={{
                    v1: { opacity: 0},
                    v2: { opacity: 2},
                }}
                initial="v1"
                animate="v2"
                transition={{ duration: 1 }}
                // style={{
                //     x: translateX2,
                // }}
            >
                <img src={image} alt="that me by the ai" srcSet="" />
            </motion.div>
            <div className="scrolldown">
                <svg width="16" height="32" viewBox="0 0 16 32" fill="#555" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39999 0.5C4.20565 0.5 0.799988 3.64669 0.799988 7.52208V14.2129C0.799988 18.0883 4.20565 21.235 8.39999 21.235C12.5943 21.235 16 18.0883 16 14.2129V7.52208C16 3.64669 12.5943 0.5 8.39999 0.5ZM13.8491 14.2129C13.8491 16.9953 11.4113 19.2476 8.39999 19.2476C5.38867 19.2476 2.95093 16.9953 2.95093 14.2129V7.52208C2.95093 4.73975 5.38867 2.48738 8.39999 2.48738C11.4113 2.48738 13.8491 4.73975 13.8491 7.52208V14.2129Z" fill="#555555" />
                    <path d="M8.39999 4.6735C7.79056 4.6735 7.32452 5.1041 7.32452 5.66719V8.35016C7.32452 8.91325 7.79056 9.34385 8.39999 9.34385C9.00943 9.34385 9.47546 8.91325 9.47546 8.35016V5.66719C9.47546 5.13722 9.00943 4.6735 8.39999 4.6735Z" fill="#555555" />
                    <path d="M10.6226 22.7256L8.39997 24.8123L6.17732 22.7587C5.74713 22.3612 5.066 22.3612 4.63581 22.7587C4.20562 23.1562 4.20562 23.7855 4.63581 24.183L7.64714 26.9653C7.86223 27.164 8.14902 27.2634 8.39997 27.2634C8.65091 27.2634 8.9377 27.164 9.1528 26.9653L12.1641 24.183C12.5943 23.7855 12.5943 23.1562 12.1641 22.7587C11.7339 22.3612 11.0528 22.3612 10.6226 22.7256Z" fill="#555555" />
                    <path d="M10.6226 27.4953L8.39997 29.5489L6.17732 27.4953C5.74713 27.0978 5.066 27.0978 4.63581 27.4953C4.20562 27.8928 4.20562 28.5221 4.63581 28.9196L7.64714 31.7019C7.86223 31.9006 8.14902 32 8.39997 32C8.65091 32 8.9377 31.9006 9.1528 31.7019L12.1641 28.9196C12.5943 28.5221 12.5943 27.8928 12.1641 27.4953C11.7339 27.0978 11.0528 27.0978 10.6226 27.4953Z" fill="#555555" />
                </svg>


            </div>
        </motion.div>
    )
}
export default Home;
