import Banner from "@ui/banner";
import Header from "@ui/header";

const HomeModule = () => {
  return (
    <div
      className="z-0 h-screen snap-y snap-mandatory overflow-scroll
      scrollbar"
    >
      <Header />
      <section id="banner" className="snap-center">
        <Banner />
      </section>
    </div>
  );
};

export default HomeModule;
