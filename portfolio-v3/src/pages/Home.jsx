
import { ProjectsSection } from "../components/ProjectsSection";

import { AboutMe } from "../components/AboutMe";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      <main>
        <AboutMe/>
        <ProjectsSection />

      </main>

    </div>
  );
};