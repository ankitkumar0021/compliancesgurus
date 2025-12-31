import ContactDetails from "../components/contact-us/ContactDetails";
import ContactFAQ from "../components/contact-us/ContactFAQ";
import ContactForm from "../components/contact-us/ContactForm";
import ContactHero from "../components/contact-us/ContactHero";
import EmergencySupport from "../components/contact-us/EmergencySupport";
import MapSection from "../components/contact-us/MapSection";


export default function ContactPage() {
  return (
    <div className="">
      <ContactHero />
      <div className="section-padding ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ContactDetails />
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <MapSection />
      <EmergencySupport />
      <ContactFAQ />
    </div>
  )
}