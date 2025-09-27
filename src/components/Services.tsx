import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BrainCircuit, Building, TrendingUp, FileCode } from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Enterprise Application Development',
    description: 'AI-powered platforms, business management systems, and enterprise-level applications with advanced functionality and scalable architecture.',
    features: ['AI/ML Integration', 'Scalable Architecture', 'Advanced Analytics', 'Business Intelligence'],
    color: 'from-primary to-primary-electric'
  },
  {
    icon: TrendingUp,
    title: 'Business Platform Solutions',
    description: 'Complete business platforms including ISP services, consulting agencies, and multi-service technology solutions with comprehensive management systems.',
    features: ['Multi-Service Platforms', 'Customer Management', 'Billing Systems', 'Service Delivery'],
    color: 'from-secondary-neural to-secondary-cyan'
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Integration & Automation',
    description: 'Machine learning integration, automated business processes, and intelligent data analysis systems that drive efficiency and insights.',
    features: ['Process Automation', 'Intelligent Analytics', 'ML Model Integration', 'Data Processing'],
    color: 'from-accent-green to-accent-orange'
  },
  {
    icon: FileCode,
    title: 'Full-Stack Development & Deployment',
    description: 'End-to-end development from concept to production deployment with professional hosting, domain management, and ongoing support.',
    features: ['Complete Development', 'Cloud Deployment', 'Domain Management', '24/7 Support'],
    color: 'from-primary-electric to-secondary-neural'
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background-gradient-start to-background-dark relative">
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
            Professional <span className="text-primary-electric">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-body">
            Comprehensive technology solutions designed to transform your business ideas into scalable, professional-grade applications that drive real results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group-hover:neural-glow">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white dark:text-white text-heading group-hover:text-primary-electric transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-white/70 dark:text-white/80 text-body leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-accent-green text-heading">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
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
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Neural Network Connections Visualization */}
        <div className="relative mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg className="w-full h-32" viewBox="0 0 800 200">
              {/* Connection Lines */}
              <motion.path
                d="M100,100 Q400,50 700,100"
                stroke="rgba(37, 99, 235, 0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
              <motion.path
                d="M100,100 Q400,150 700,100"
                stroke="rgba(124, 58, 237, 0.3)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
              
              {/* Neural Nodes */}
              {[100, 300, 500, 700].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy="100"
                  r="4"
                  fill="rgba(37, 99, 235, 0.8)"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                  className="neural-pulse"
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}