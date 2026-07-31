import Hero from "@/components/Hero"
import Grid from "@/components/ui/grid";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
    <div className="max-w-7xl w-full">
    <Hero />
    <div id="skills">
      <Grid />
    </div>
    <About />
    <div id="projects">
      <RecentProjects />
    </div>
    <div id="work">
      <Experience />
    </div>
    <Approach />
    <Footer />
    </div>
    </main>
  );
}