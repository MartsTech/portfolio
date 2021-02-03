import React from "react";
import { ResumeData } from "../types";
import "../styles/About.css";
import ProfilePic from "../images/profilepic.jpg";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Button } from "@material-ui/core";
import pdfFile from "../images/resume-website.jpg";

interface AboutProps {
  data: ResumeData["main"];
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={ProfilePic} alt="Profile Pic" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{data.bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{data.name}</span>
                <br />
                <span>
                  {data.address.street}
                  <br />
                  {data.address.city} {data.address.state}, {data.address.zip}
                </span>
                <br />
                <span>{data.phone}</span>
                <br />
                <span>{data.email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <div className="button">
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<GetAppIcon />}
                    size="large"
                    onClick={() =>
                      window.open(pdfFile, "PRINT", "height=400,width=600")
                    }
                  >
                    Download Resume
                  </Button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
