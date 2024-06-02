import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[280px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white-300 text-shadow-lg`}>
            AWESOME <span className="text-white-300 ">ASSAM</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-800 font-normal`}>
            Breathe in the fresh air,{" "}
            <br className="sm:block hidden" />
            Assam's untouched beauty will leave you breathless
          </p>
        </div>
      </div>

      <ComputersCanvas />

      
    </section>
  );
};

export default Hero;
