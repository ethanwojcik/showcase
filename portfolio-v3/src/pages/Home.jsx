
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle  } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
      <main>
        <AboutMe/>
        <ProjectsSection />

      </main>

    </div>
  );
};