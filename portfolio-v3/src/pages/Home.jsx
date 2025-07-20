
import { ProjectsSection } from "../components/ProjectsSection";
import { ThemeToggle  } from "../components/ThemeToggle";
import { AboutMe } from "../components/AboutMe";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { Introduction } from "../components/Introduction";
import { SkillsSection } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>
        <StarBackground/>
        <Navbar/>
      <main>
        <Introduction/>
        <AboutMe/>
        <SkillsSection/>
        <ProjectsSection />
        <Contact/>

      </main>
      <Footer/>

    </div>
  );
};