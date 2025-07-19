
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle  } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Introduction } from "../components/Introduction";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
      <main>
        <Introduction/>
        <AboutMe/>
        <ProjectsSection />

      </main>

    </div>
  );
};