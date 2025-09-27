import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'
import logo from '../assets/logo (3).png'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
    { name: 'Site Map', href: '/sitemap.xml' }
  ]

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/ThomasKairu' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/thomas-muchomba-a36b46312' },
    { name: 'Email', icon: Mail, href: 'mailto:thomas@synapseflow.dev' }
  ]

  const projects = [
    { name: 'Jobix - AI Resume Analyzer', href: 'https://www.jobix.publicvm.com' },
    { name: 'Airnet - ISP Platform', href: 'https://airnet.pages.dev' },
    { name: 'Bridges - Technology Agency', href: 'https://www.bridges.linkpc.net' },
    { name: 'Glows - Business Consulting', href: 'https://www.glows.work.gd' }
  ]

  return (
    <footer className="bg-gradient-to-t from-background-dark to-background-gradient-start border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <img src={logo} alt="Synapseflow Solutions Logo" className="w-8 h-8" />
              <span className="text-xl font-bold text-display text-white">
                Synapseflow Solutions
              </span>
            </div>
            <p className="text-white/70 text-body mb-6 leading-relaxed">
              Connecting Ideas to Innovation through enterprise-level full-stack development and AI-powered business solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="p-2 glass-effect rounded-lg hover:neural-glow transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white hover:text-primary-electric transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white text-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-primary-electric transition-colors duration-200 text-body"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Live Projects */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white text-heading mb-6">Live Projects</h3>
            <ul className="space-y-3">
              {projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-primary-electric transition-colors duration-200 text-body flex items-center group"
                  >
                    {project.name}
                    <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white text-heading mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div>
                <p className="text-white/70 text-body">
                  <strong className="text-white">Email:</strong><br />
                  thomas@synapseflow.dev
                </p>
              </div>
              <div>
                <p className="text-white/70 text-body">
                  <strong className="text-white">Location:</strong><br />
                  Nairobi, Kenya
                </p>
              </div>
              <div>
                <p className="text-white/70 text-body">
                  <strong className="text-white">Availability:</strong><br />
                  Open to new opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-white/60 text-body text-sm">
                © 2025 Synapseflow Solutions. All rights reserved.
              </p>
              <p className="text-white/40 text-body text-xs mt-1">
                Built with React & Next.js | Powered by Innovation
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-body text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <Button
              variant="glass"
              size="icon"
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 neural-gradient rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-secondary-neural/10 to-transparent rounded-full blur-3xl"></div>
      </div>
    </footer>
  )
}