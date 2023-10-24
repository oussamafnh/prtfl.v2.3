import * as React from "react";
import "./app.css";
import XNavbar from "./components/navbar";
import Home from "./components/home";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
function XXX() {
  return (
    <>
      <Home />
      <Resume />
      <Portfolio />

      <XNavbar />
    </>
  );
}

export default XXX;
