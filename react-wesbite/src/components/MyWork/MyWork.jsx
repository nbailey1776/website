import React from "react";

import styles from "./MyWork.module.css";
import projects from "../../data/projects.json";
import { MyWorkCard } from "./MyWorkCard";
export const MyWork = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <MyWorkCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
