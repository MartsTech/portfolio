import React from "react";
import { ResumeData } from "../types";
import "../styles/Testimonials.css";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";

interface TestimonialsProps {
  data: ResumeData["testimonials"];
}

const Testimonials: React.FC<TestimonialsProps> = ({ data }) => {
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>
                {" "}
                <FormatQuoteIcon />
              </span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">
              {data.testimonials.map((testimonials) => {
                return (
                  <li key={testimonials.user}>
                    <blockquote>
                      <p>{testimonials.text}</p>
                      <cite>{testimonials.user}</cite>
                    </blockquote>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
