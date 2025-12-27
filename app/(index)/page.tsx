import CTA from "../components/home/CTA";
import Hero from "../components/home/Hero";
import MainBanner from "../components/home/MainBanner";


export default function Home() {
  return (
    <>
      <MainBanner />
      <Hero />
      {/* <Highlights /> */}
      {/* <Stats /> */}
      {/* <Testimonial /> */}
      <CTA />
    </>
  )
}