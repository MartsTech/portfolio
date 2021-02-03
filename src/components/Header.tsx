import React, { useEffect, useState } from "react";
// @ts-ignore
import TypeWriter from "react-typewriter";
import { ResumeData } from "../types";
import { Link } from "react-scroll";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import "../styles/Header.css";

interface HeaderProps {
  data: ResumeData["main"];
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const [show, handleShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  const socials = data.social.map((network) => {
    return (
      <li key={network.name}>
        <a href={network.url}>
          {network.name === "youtube" && <YouTubeIcon fontSize="large" />}
          {network.name === "facebook" && <FacebookIcon fontSize="large" />}
          {network.name === "linkedin" && <LinkedInIcon fontSize="large" />}
          {network.name === "instagram" && <InstagramIcon fontSize="large" />}
          {network.name === "github" && <GitHubIcon fontSize="large" />}
        </a>
      </li>
    );
  });
  return (
    <header id="home" className="header">
      <nav id="nav__wrap">
        <ul id={show ? "nav" : "nav__hide"}>
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>About</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>Resume</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>Works</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>Testimonials</p>
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <p>Contact</p>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__title">
            <TypeWriter typing={0.5}>
              {data.name ? `I'm ${data.name}.` : null}
            </TypeWriter>
          </h1>
          <h3>
            Based in {data.address.city}. <span>{data.occupation}</span>.{" "}
            {data.description}.
          </h3>
          <hr />
          <ul className="social">{socials}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <ArrowDropDownCircleIcon fontSize="large" />
        </Link>
      </p>
    </header>
  );
};

export default Header;
