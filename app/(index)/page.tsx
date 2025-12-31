import ComplianceCards from "../components/home/ComplianceCards";
import CompliancePlanning from "../components/home/CompliancePlanning";
import CTA from "../components/home/CTA";
import LeadershipOverview from "../components/home/LeadershipOverview";
import MainBanner from "../components/home/MainBanner";
import MapSectionHome from "../components/home/MapSectionHome";


export default function Home() {
  return (
    <>
      <MainBanner />
      <CompliancePlanning />
      <ComplianceCards />
      <LeadershipOverview />
      <MapSectionHome />
      {/* <Hero /> */}
      {/* <Highlights /> */}
      {/* <Stats /> */}
      {/* <Testimonial /> */}
      <CTA />
    </>
  )
}