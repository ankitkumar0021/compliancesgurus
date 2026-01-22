import BlogSection from "../components/home/BlogSection";
import ComplianceCards from "../components/home/ComplianceCards";
import CompliancePlanning from "../components/home/CompliancePlanning";
import CTA from "../components/home/CTA";
import ImageTextSection from "../components/home/ImageTextSection";
import MainBanner from "../components/home/MainBanner";
import MapSectionHome from "../components/home/MapSectionHome";


export default function Home() {
  return (
    <>
      <MainBanner />
      <CompliancePlanning />
      {/* <LeadershipOverview /> */}
      <ComplianceCards />
      <MapSectionHome />
      <ImageTextSection />
      <BlogSection />
      {/* <Hero /> */}
      {/* <Highlights /> */}
      {/* <Stats /> */}
      {/* <Testimonial /> */}
      <CTA />
    </>
  )
}