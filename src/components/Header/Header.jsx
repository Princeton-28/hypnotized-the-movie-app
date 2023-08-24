// import section
import React, { useEffect, useState } from "react";
// import styles from "./Header.module.css"
import "./Header.css";

// header component that renders the header tag with the "text" and "text2" passed as props.
export default function Header({ text_1, text_2 }) {
  const [header, setHeader] = useState("header");

  // scroll function which hides the first header & its children on scroll down at a prefixed limit & simultaneously triggers the second header & its children to appear. This operation occurs the other way around as well.
  const listenScrollEvent = (event) => {
    event.preventDefault();
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header_2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <header title="code" className={header}>
      <h2>{text_1}</h2>
      <h3>{text_2}</h3>
    </header>
  );
}
