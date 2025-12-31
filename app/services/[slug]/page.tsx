import { SERVICES } from "@/data/servicesData"
import ServiceHero from "@/app/components/service/ServiceHero"
import ServiceTable from "@/app/components/service/ServiceTable"
import ServiceCTA from "@/app/components/service/ServiceCTA"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return Object.keys(SERVICES).map(slug => ({ slug }))
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES[slug as keyof typeof SERVICES]

  if (!service) notFound()

  return (
    <>
      <ServiceHero {...service.hero} />
      <ServiceTable sections={service.tableSections} />
      <ServiceCTA {...service.cta} />
    </>
  )
}
