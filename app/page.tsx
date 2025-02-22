import Hero from "./components/Hero"
import MySkills from "./components/MySkills"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"

export default function Home() {
  return (
    <>
      <Hero />
      <MySkills />
      <PortfolioGrid />
      <Timeline />
      <Marquee />
      <ContactForm />
    </>
  )
}

