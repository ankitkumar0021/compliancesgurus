import React from "react"
import { notFound } from "next/navigation"
import { SERVICES } from "@/data/servicesData"
import ServiceMainHero from "@/app/components/service/ServiceMainHero"
import ServiceHero from "@/app/components/service/ServiceHero"
import ServiceTable from "@/app/components/service/ServiceTable"
import ServiceCTA from "@/app/components/service/ServiceCTA"

type Props = {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: Props) {
  const { slug } = params

  const service = SERVICES[slug as keyof typeof SERVICES]

  if (!service) {
    notFound()
  }

  return (
    <>
      <ServiceHero {...service.hero} image={service.hero.image || ""} />
      <ServiceMainHero {...service.mainHero} />
      <ServiceTable sections={[...service.tableSections]} />
      <ServiceCTA {...service.cta} />
    </>
  )
}
