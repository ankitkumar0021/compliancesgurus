import { staticBlogs } from '@/data/staticBlogs'
import Image from 'next/image'
import Link from 'next/link'

export default function BlogSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {staticBlogs.map((blog, i) => (
            <Link
              key={i}
              href={blog.href}
              className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="relative h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {blog.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
