import React from "react";
import styles from "@/styles/UIUX.module.scss";
import { uxProjects } from "../shared/data";
import Image from "next/image";
import { FiFigma } from "react-icons/fi";

const UxCard = ({ uxProject }) => {
  const { image, projectName, link, projectDesc } = uxProject;
  return (
    <div
      className={styles.uxCardContainer}
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className={styles.uxCardImage}>
        <Image src={image} alt="UI UX Projects" />
      </div>
      <div className={styles.uxCardInfo}>
        <h1>{projectName}</h1>
        <p>{projectDesc} </p>
      </div>
      <div className={styles.devProjectCardButton}>
        <a href={link} target="_blank" rel="noreferrer">
          
          <button>Check out !</button>
        </a>
      </div>
    </div>
  );
};

const UIUXSection = () => {
  return (
    <div className={styles.uiUx} id="uiux">
      <h1 data-aos="fade-up">UI/UX Designs</h1>
      <div className={styles.uiUxContainer}>
        {uxProjects.map((uxProject) => {
          return <UxCard uxProject={uxProject} key={uxProject.id} />;
        })}
      </div>
    </div>
  );
};

export default UIUXSection;
