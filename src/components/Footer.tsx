import React from "react";
import { ResumeData } from "../types";
import "../styles/Footer.css";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-scroll";

interface FooterProps {
  data: ResumeData["main"];
}

const Footer: React.FC<FooterProps> = ({ data }) => {
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
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{socials}</ul>

          <ul className="copyright">
            <li>
              Made by <p title="Martin">Martin</p>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <a className="smoothscroll" title="Back to Top" href="#home">
              <ArrowUpwardIcon fontSize="large" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
