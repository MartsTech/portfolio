import React from "react";
import { ResumeData } from "../types";
import "../styles/Portfolio.css";
import LinkIcon from "@material-ui/icons/Link";

interface PortfolioProps {
  data: ResumeData["portfolio"];
}

const Portfolio: React.FC<PortfolioProps> = ({ data }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {data.projects.map((projects) => {
              return (
                <div key={projects.title} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={projects.url} title={projects.title}>
                      <img
                        className="project_img"
                        alt={projects.title}
                        src={`images/portfolio/${projects.image}`}
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{projects.title}</h5>
                          <p>{projects.category}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <LinkIcon />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
