import React, { useEffect, useState } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";
import Testimonials from "../components/Testimonials";
import { ResumeData } from "../types";

const App = () => {
  const [resumeData, setResumeData] = useState<ResumeData>();

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data: ResumeData) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="app">
      {resumeData && (
        <>
          <Header data={resumeData?.main} />
          <About data={resumeData?.main} />
          <Resume data={resumeData.resume} />
          <Portfolio data={resumeData.portfolio} />
          <Testimonials data={resumeData.testimonials} />
          <Contact data={resumeData.main} />
          <Footer data={resumeData.main} />
        </>
      )}
    </div>
  );
};

export default App;
