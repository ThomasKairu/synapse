import { NeuralBackground } from '@/components/NeuralBackground'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Services } from '@/components/Services'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { StickyWhatsapp } from '@/components/StickyWhatsapp'
import { Helmet } from 'react-helmet-async'

function App() {
  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>SynapseFlow Solutions - Driving Business Growth Through Technology</title>
        <meta name="description" content="SynapseFlow Solutions specializes in creating advanced, enterprise-level applications that drive business growth. Explore our portfolio of AI-powered tools, ISP platforms, and custom business solutions." />
        <meta name="keywords" content="enterprise applications, AI solutions, business growth, technology consulting, web development, SynapseFlow Solutions" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.synapseflow.solutions/" />
        <meta property="og:title" content="SynapseFlow Solutions - Driving Business Growth Through Technology" />
        <meta property="og:description" content="Specializing in advanced, enterprise-level applications that drive business growth. Explore our portfolio of AI-powered tools, ISP platforms, and custom business solutions." />
        <meta property="og:image" content="https://www.synapseflow.solutions/og-image.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.synapseflow.solutions/" />
        <meta property="twitter:title" content="SynapseFlow Solutions - Driving Business Growth Through Technology" />
        <meta property="twitter:description" content="Specializing in advanced, enterprise-level applications that drive business growth. Explore our portfolio of AI-powered tools, ISP platforms, and custom business solutions." />
        <meta property="twitter:image" content="https://www.synapseflow.solutions/og-image.png" />
      </Helmet>
      <NeuralBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <StickyWhatsapp />
    </div>
  )
}

export default App