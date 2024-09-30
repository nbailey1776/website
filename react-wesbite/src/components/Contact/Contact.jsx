import React from "react";

import styles from "./Contact.module.css";
import { getImageURL } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:ncbailey@ncsu.edu">ncbailey@ncsu.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageURL("contact/linkedinIcon.png")}
            alt="Linkedin icon"
          />
          <a href="https://www.linkedin.com/in/nick-bailey-29b195230/">
            linkedin.com/nick-bailey
          </a>
        </li>
        {/* <li className={styles.link}> 
          <img src={getImageURL("contact/githubIcon.png")} alt="GitHub icon" />
          <a href="">github.com/nick-bailey</a>
        </li>
        */}
      </ul>
    </footer>
  );
};
