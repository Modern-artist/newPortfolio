import React from "react";

import styles from "@/styles/HeroSection.module.scss";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className={styles.heroSection} id="hero-section">
      <div className={styles.heroContainer}>
        <div className={styles.heroIntro}>
          <p data-aos="fade-down">Hi! my name is Prem, I love</p>
          <h1 data-aos="fade-down" data-aos-delay="200">
            Building <span className={styles.heroColor}>products</span> and{" "}
            <span className={styles.heroColor2}>experiences</span>.
          </h1>
          <div className={styles.heroShortIntro}>
            <p
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-anchor=".heroIntro"
            >
              I&apos;m a versatile UI/UX designer and full-stack web developer. I specialize in creating visually stunning interfaces that seamlessly merge aesthetics with functionality.
            </p>
          </div>
        </div>
        <div
          className={styles.heroCta}
          data-aos="fade-down"
          data-aos-delay="600"
          data-aos-anchor=".heroShortIntro"
        >
          <Link to="uiux" smooth={true} className={styles.heroCtaButtonLink}>
            <button>Check out my works!</button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1cZKarBFC3TvrlUNGKqn8Wu4YYAARKlOY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resume}
          >
            See my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
