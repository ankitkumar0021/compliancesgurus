import Link from "next/link"

type Props = {
  title: string
  description: string
}

export default function ServiceCTA({ title, description }: Props) {
  return (
    <section className="py-20 bg-[#0a95b4] text-white text-center">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
      <Link
        href="/contact"
        className="btn-primary mt-8 inline-block border border-white"
      >
        Contact Us
      </Link>
    </section>
  )
}
