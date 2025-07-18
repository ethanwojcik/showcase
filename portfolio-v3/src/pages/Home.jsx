
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle  } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
      <main>
        <AboutMe/>
        <ProjectsSection />

      </main>

    </div>
  );
};