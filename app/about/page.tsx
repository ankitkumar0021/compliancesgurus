import AboutHero from "../components/about/AboutHero";
import ApproachSection from "../components/about/ApproachSection";
import MissionSection from "../components/about/MissionSection";
import TeamSection from "../components/about/TeamSection";
import ValuesSection from "../components/about/ValuesSection";


export default function AboutPage() {
  return (
    <div className="">
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <ApproachSection />
      {/* <TimelineSection /> */}
      <TeamSection />
    </div>
  )
}