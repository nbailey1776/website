import React from "react";

import styles from "./About.module.css";
import { getImageURL } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageURL("about/aboutMe.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/terminal.png")} alt="terminal icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Development</h3>
              <p>Knowledgable in Java, C, Python, and other frameworks</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageURL("about/check.png")} alt="check mark" />
            <div className={styles.aboutItemText}>
              <h3>IT Support</h3>
              <p>Troubleshooting software and hardware systems</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageURL("about/collaboration.png")}
              alt="collaboration icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Team managment and collaboration</h3>
              <p>Communicate and work effectively across teams</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
