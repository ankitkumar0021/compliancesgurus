import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Compliance Gurus - Telecom & DoT Compliance Experts',
  description: 'Trusted partner for DoT & Telecom compliance for ISPs and telecom businesses in India',
  keywords: ['telecom compliance', 'DoT compliance', 'ISP compliance', 'TRAI reporting', 'AGR calculations'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.className} ${poppins.variable}`}>
      <body className="">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}