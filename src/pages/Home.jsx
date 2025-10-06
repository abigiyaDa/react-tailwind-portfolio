import { Navbar } from "@/components/NavBar"
import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { HeroSection } from "../components/HeroSection"
import { AboutSection } from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer.JSX"


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

        <Footer />

    </div>
  )
}