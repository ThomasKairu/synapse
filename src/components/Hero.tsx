import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronDown, Download, Eye } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    'Full-Stack Developer',
    'AI/ML Integration Expert',
    'Enterprise Solutions Architect',
    'Business Platform Creator'
  ]

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentIndex((prev) => (prev + 1) % texts.length)
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Professional Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <img
                src="/thomas-profile.png"
                alt="Thomas Muchomba - Professional headshot"
                className="w-32 h-32 rounded-full mx-auto neural-glow object-cover"
                style={{ width: '128px', height: '128px' }}
              />
              <div className="absolute inset-0 rounded-full neural-pulse bg-gradient-to-r from-primary-electric/20 to-secondary-neural/20"></div>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold text-display text-white mb-6"
          >
            Synapseflow Solutions
          </motion.h1>

          {/* Animated Subheadline */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-heading text-primary-electric mb-8 h-12"
          >
            {currentText}
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl text-white/80 mb-12 max-w-2xl mx-auto text-body"
          >
            "Connecting Ideas to Innovation"
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-white/70 mb-12 max-w-4xl mx-auto text-body leading-relaxed"
          >
            <p className="mb-4">
              Passionate Full-Stack Developer and recent Strathmore University graduate with proven expertise in building enterprise-level business applications. I've successfully developed and deployed 4 sophisticated platforms spanning AI/ML integration, telecommunications, agency services, and business consulting.
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h3 className="text-accent-green font-semibold mb-2">🚀 Featured Accomplishments:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• Built AI-powered resume analysis platform</li>
                  <li>• Developed complete ISP service platform</li>
                  <li>• Created multi-service technology agency</li>
                  <li>• Launched premium business consulting platform</li>
                </ul>
              </div>
              <div>
                <h3 className="text-accent-orange font-semibold mb-2">💡 Core Expertise:</h3>
                <ul className="space-y-1 text-sm">
                  <li>• AI/ML integration & automation</li>
                  <li>• Enterprise-level architecture</li>
                  <li>• Business process optimization</li>
                  <li>• Scalable platform development</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button variant="neural" size="xl" className="group">
              <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View My Work
            </Button>
            <Button variant="glass" size="xl" className="group" asChild>
              <a href="/Thomas_Muchomba_Resume.pdf" download="Thomas_Muchomba_Resume.pdf">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-white/60"
            >
              <span className="text-sm mb-2 text-body">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}