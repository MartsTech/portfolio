import About from "@features/ui/about";
import Banner from "@features/ui/banner";
import Experience from "@features/ui/experience/Experience";
import Header from "@features/ui/header";

const HomeModule = () => {
  return (
    <div
      className="z-0 h-screen snap-y snap-mandatory 
      overflow-scroll scrollbar"
    >
      <Header />
      <section id="banner" className="snap-start">
        <Banner />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
    </div>
  );
};

export default HomeModule;
