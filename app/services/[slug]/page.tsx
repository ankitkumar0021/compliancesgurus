import { notFound } from "next/navigation";
import { SERVICES } from "@/data/servicesData";
import ServiceMainHero from "@/app/components/service/ServiceMainHero";
import ServiceHero from "@/app/components/service/ServiceHero";
import ServiceTable from "@/app/components/service/ServiceTable";
import ServiceCTA from "@/app/components/service/ServiceCTA";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ServicePage({ params }: Props) {
  // ✅ unwrap params (REQUIRED in Next.js 15)
  const { slug } = await params;

  if (!slug || !(slug in SERVICES)) {
    notFound();
  }

  const service = SERVICES[slug as keyof typeof SERVICES];

  return (
    <>
      <ServiceHero
        title={service.hero.title}
        description={service.hero.description}
        image={service.hero.image}
      />

      <ServiceMainHero {...service.mainHero} />

      <ServiceTable sections={service.tableSections} />

      <ServiceCTA {...service.cta} />
    </>
  );
}
