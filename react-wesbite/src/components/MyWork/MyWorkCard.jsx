import React from "react";
import { getImageURL } from "../../utils";
import styles from "./MyWorkCard.module.css";

export const MyWorkCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageURL(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      {/* Move the video here at the bottom */}
      {demo ? (
        <div className={styles.videoContainer}>
          <video width="100%" height="200" controls>
            <source src={demo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
    </div>
  );
};
