import React, { useState } from "react";
import { ResumeData } from "../types";
import "../styles/Contact.css";
import { Button } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

interface ContactProps {
  data: ResumeData["main"];
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitForm = () => {
    window.open(
      `mailto:${data.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
        email
      )}): ${encodeURIComponent(message)}`
    );
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{data.contactmessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={submitForm}>
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={name}
                  size={35}
                  id="contactName"
                  name="contactName"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  value={email}
                  size={35}
                  id="contactEmail"
                  name="contactEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  value={subject}
                  size={35}
                  id="contactSubject"
                  name="contactSubject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols={50}
                  rows={15}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="contactMessage"
                  name="contactMessage"
                ></textarea>
              </div>

              <div>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={submitForm}
                  type="submit"
                  className="submit"
                >
                  Submit
                </Button>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <CheckIcon />
            <p>Your message was sent, thank you!</p>
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Address and Phone</h4>
            <p className="address">
              {data.name}
              <br />
              {data.email}
              <br />
              <br />
              {data.address.street} <br />
              {data.address.city}, {data.address.state} {data.address.zip}
              <br />
              <span>{data.phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
