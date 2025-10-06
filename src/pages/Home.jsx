import { Navbar } from "@/components/NavBar.jsx"
import { ThemeToggle } from "../components/ThemeToggle.jsx"
import { StarBackground } from "@/components/StarBackground.jsx"
import { HeroSection } from "../components/HeroSection.jsx"
import { AboutSection } from "../components/AboutSection.jsx"
import { SkillsSection } from "../components/SkillsSection.jsx"
import { ProjectsSection } from "../components/ProjectsSection.jsx"
import { ContactSection } from "../components/ContactSection.jsx"
import { FooterSection } from "../components/FooterSection.jsx"


export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* theme toggle */}
        <ThemeToggle /> 

        {/* handle background effects */}
        <StarBackground />

        {/* add the nav bar */}
        <Navbar />

        {/* main content - hero section , about,skill , projects*/}
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>

        {/* footer */}

        <FooterSection />
    </div>
  )
}