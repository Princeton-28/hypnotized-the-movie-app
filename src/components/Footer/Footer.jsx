// import section
import {
  FaGithub,
  FaLinkedin,
  FaStudiovinari,
  FaPhotoVideo,
  FaRegCopyright,
} from "react-icons/fa";
import React from "react";
import styles from "./Footer.module.css";

const linkedinProfile_Url = "https://linkedin.com/in/princeton28-889944h";

const githubProfile_Url = "https://github.com/Princeton-28";

const ToLinkedin = (event) => {
  event.preventDefault();
  window.location.href = linkedinProfile_Url;
};

const ToGithub = (event) => {
  event.preventDefault();
  window.location.href = githubProfile_Url;
};

// this our Footer component in which we pass the props "text"
export default function Footer({ text_1, text_2 }) {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logos_socialmedia}>
        <FaLinkedin onClick={ToLinkedin} className={styles.linkedin} />
        <FaGithub onClick={ToGithub} className={styles.github} />
      </div>

      <div className={styles.footer_text_container}>
        <span className={styles.copyright}>
          <FaRegCopyright />
        </span>
        {text_1}
        <div className={styles.logos_brand}>
          <FaStudiovinari className={styles.studiovinari} />
          <FaPhotoVideo className={styles.photovideo} />
        </div>
        {text_2}
      </div>
    </div>
  );
}
