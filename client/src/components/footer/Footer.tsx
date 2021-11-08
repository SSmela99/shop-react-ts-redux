import styles from "./Footer.module.scss";
import logo from "src/assets/logo.svg";

import clsx from "clsx";

import { AiOutlineLinkedin as Linkedin } from "react-icons/ai";
import { AiOutlineGithub as Github } from "react-icons/ai";
import { MdWebAsset as Portfolio } from "react-icons/md";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="container d-flex justify-content-lg-around justify-content-between align-items-center">
        <div className="text-center">
          <img src={logo} alt="logo" className={styles.logo} />
          <p className={styles.title}>Sklep Internetowy</p>
        </div>
        <div>
          <p className={styles.me}>Sebastian Smela 2021</p>
          <div className={clsx("d-flex", styles.socials)}>
            <a
              href="https://www.linkedin.com/in/sebastian-smela-36a776201/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/SSmela99"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a href="/#" target="_blank" rel="noreferrer">
              <Portfolio />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
