import { About } from "../atoms/about";
import { Contact } from "../atoms/contact";
import { CursorGlow } from "../atoms/cursor-glow";
import { Experience } from "../atoms/experience";
import { Expertise } from "../atoms/expertise";
import { Footer } from "../atoms/footer";
import { Hero } from "../atoms/hero";
import { Loader } from "../atoms/loader";
import { Nav } from "../atoms/nav";
import { Projects } from "../atoms/projects";

export function Portfolio() {
  return (
    <div className="relative">
      <Loader />
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        {/* <Projects /> */}
        <Expertise />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
