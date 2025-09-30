import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

interface CounterProps {
  end: number
  suffix?: string
  duration?: number
}

function Counter({ end, suffix = '', duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return <span ref={countRef}>{count}{suffix}</span>
}

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background-dark to-background-gradient-start relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-display text-white mb-6">
              About <span className="text-primary-electric">Synapseflow Solutions</span>
            </h2>
            
            <div className="space-y-6 text-white/80 text-body text-lg leading-relaxed">
              <p>
                As a Strathmore University graduate, I've transformed my passion for technology into real-world solutions that drive business success. My journey in full-stack development has been marked by a commitment to excellence and continuous learning.
              </p>
              
              <p>
                What sets me apart is my ability to understand complex business requirements and translate them into scalable, professional-grade applications. I don't just write code – I architect complete business solutions that deliver measurable value.
              </p>
              
              <p>
                My approach combines technical expertise with business acumen, ensuring that every project I undertake not only meets technical specifications but also drives real business outcomes for my clients.
              </p>
            </div>

            {/* Achievement Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { number: 74, suffix: '', label: 'Enterprise Apps Built' },
                { number: 600, suffix: '+', label: 'Combined Users' },
                { number: 98, suffix: '%', label: 'Client Satisfaction' },
                { number: 24, suffix: '/7', label: 'Support Available' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-display text-primary-electric mb-2">
                    <Counter end={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-white/60 text-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            <div className="relative h-full">
              {/* Main Image */}
              <div className="relative z-10 glass-effect rounded-2xl neural-glow h-full flex items-center justify-center overflow-hidden">
                <img
                  src="/thomas-profile.png"
                  alt="Thomas Muchomba - Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}