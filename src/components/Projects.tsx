import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import jobix from '../assets/jobix.png';
import airnet from '../assets/airnet.png';
import bridges from '../assets/bridges.png';
import glows from '../assets/glows.png';

const projects = [
  {
    id: 1,
    title: 'Jobix - AI-Powered Resume Analyzer',
    description: 'Sophisticated AI-driven platform that analyzes resumes against job descriptions, providing personalized optimization recommendations and detailed insights for better job matching.',
    image: jobix,
    imageAlt: 'Modern web application interface showing AI resume analysis dashboard with charts and recommendations - KOBU Agency on Unsplash',
    url: 'https://www.jobix.publicvm.com',
    github: 'https://github.com/ThomasKairu',
    features: ['AI-powered analysis', 'Resume optimization', 'Job matching', 'Privacy-first approach', 'PDF export', 'Secure processing'],
    techStack: ['AI/ML Integration', 'Advanced Data Processing', 'Secure Backend APIs', 'Modern Frontend'],
    color: 'from-blue-500 to-purple-600',
    size: 'large'
  },
  {
    id: 2,
    title: 'Airnet - ISP Service Platform',
    description: 'Complete internet service provider platform with multiple data plans, customer management, billing system, and professional network infrastructure services.',
    image: airnet,
    imageAlt: 'Internet service provider platform interface with pricing plans and network monitoring dashboard - Pat Whelen on Unsplash',
    url: 'https://airnet.pages.dev',
    github: 'https://github.com/ThomasKairu',
    features: ['Multi-tier pricing (KES 890-2000+)', 'Speed testing', 'Customer dashboard', 'Multi-channel support', 'Equipment sales', 'Service mapping'],
    techStack: ['Full-stack Business Application', 'Payment Integration', 'Customer Management', 'Network Monitoring APIs'],
    color: 'from-teal-500 to-cyan-600',
    size: 'medium'
  },
  {
    id: 3,
    title: 'Bridges - NetArchitect Agency',
    description: 'Professional technology services agency offering web development, 3D printing, and automation services with comprehensive business management and client portal systems.',
    image: bridges,
    imageAlt: 'Technology agency website showing services portfolio with 3D printing and web development projects - UX Store on Unsplash',
    url: 'https://www.bridges.linkpc.net',
    github: 'https://github.com/ThomasKairu',
    features: ['100+ projects completed', '50+ happy clients', 'Multi-service platform', 'Client testimonials', 'Professional delivery', 'Portfolio management'],
    techStack: ['Agency-level Platform', 'Multi-service Architecture', 'Client Management', 'Service Portfolio Management'],
    color: 'from-purple-500 to-pink-600',
    size: 'medium'
  },
  {
    id: 4,
    title: 'Glows - BrightPath Consulting',
    description: 'Premium business consulting and strategic transformation agency platform with comprehensive service offerings, client management, and enterprise-level business solutions.',
    image: glows,
    imageAlt: 'Business consulting platform with professional services dashboard and client management interface - Bangun Stock Production on Unsplash',
    url: 'https://www.glows.work.gd',
    github: 'https://github.com/ThomasKairu',
    features: ['500+ successful projects', '98% client satisfaction', '15+ years experience', '50+ expert consultants', 'Strategic planning', 'Digital transformation'],
    techStack: ['Enterprise Business Platform', 'Consulting Service Management', 'Client Relationship Management', 'Strategic Planning Tools'],
    color: 'from-orange-500 to-red-600',
    size: 'large'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background-dark to-background-gradient-end relative overflow-hidden" data-theme="dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-display text-white mb-6">
            Featured <span className="text-primary-electric">Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-body">
            Real solutions for real businesses - showcasing enterprise-level applications that serve hundreds of users and drive measurable business value.
          </p>
        </motion.div>

        {/* Projects Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group ${
                project.size === 'large' ? 'md:col-span-2' : 'md:col-span-1'
              }`}
            >
              <Card className="h-full glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group-hover:neural-glow overflow-hidden">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    style={{ width: '100%', height: '192px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="glass" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-white">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </Button>
                    <Button size="sm" variant="glass" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-white">
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white dark:text-white text-heading group-hover:text-primary-electric transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-white/70 dark:text-white/80 text-body leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-green text-heading mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 4).map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2 text-sm text-white/60"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-electric"></div>
                          <span className="text-body">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-accent-orange text-heading mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/10 text-white/90 rounded-md text-body"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4">
                    <Button variant="neural" size="sm" className="flex-1" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white [&_a]:text-white [&_a]:hover:text-white" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="!text-white hover:!text-white">
                        <Github className="w-4 h-4 mr-2 text-white" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/70 mb-6 text-body">
            Ready to bring your business idea to life with a professional, scalable solution?
          </p>
          <Button variant="neural" size="xl">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}