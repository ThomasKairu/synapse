import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Code, 
  Database, 
  Cloud, 
  Smartphone, 
  Globe, 
  Zap,
  Brain,
  Settings,
  Monitor,
  Server
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Technologies',
    icon: Monitor,
    skills: [
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'React.js & Next.js', level: 90 },
      { name: 'HTML5 & CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 95 },
      { name: 'Modern UI/UX', level: 85 }
    ],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Backend & Database',
    icon: Server,
    skills: [
      { name: 'Node.js & Express', level: 90 },
      { name: 'API Development', level: 95 },
      { name: 'Database Management', level: 85 },
      { name: 'AI/ML Integration', level: 80 },
      { name: 'Business Logic', level: 90 },
      { name: 'Server Configuration', level: 85 }
    ],
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Business & Enterprise',
    icon: Brain,
    skills: [
      { name: 'Enterprise Architecture', level: 85 },
      { name: 'Process Automation', level: 90 },
      { name: 'Client Management', level: 95 },
      { name: 'Payment Integration', level: 90 },
      { name: 'Multi-service Platforms', level: 85 },
      { name: 'Service Delivery', level: 95 }
    ],
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Tools & Deployment',
    icon: Settings,
    skills: [
      { name: 'Cloud Hosting', level: 90 },
      { name: 'Domain Management', level: 95 },
      { name: 'Version Control (Git)', level: 90 },
      { name: 'Performance Optimization', level: 85 },
      { name: 'Security Implementation', level: 80 },
      { name: '24/7 System Monitoring', level: 85 }
    ],
    color: 'from-orange-500 to-red-500'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background-gradient-end to-background-dark relative">
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
            Technical <span className="text-primary-electric">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-body">
            Comprehensive technology stack mastery spanning frontend development, backend architecture, business solutions, and enterprise deployment strategies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full glass-effect border-white/10 hover:border-white/20 transition-all duration-300 group-hover:neural-glow">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white text-heading group-hover:text-primary-electric transition-colors">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white/80 text-body text-sm">{skill.name}</span>
                        <span className="text-primary-electric text-body text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Technology Logos */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-display text-white text-center mb-8">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[Code, Database, Cloud, Smartphone, Globe, Zap, Brain, Settings].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, opacity: 1 }}
                className="p-4 glass-effect rounded-xl hover:neural-glow transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-white" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Neural Network Visualization */}
        <div className="relative mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <svg className="w-full h-40" viewBox="0 0 1000 200">
              {/* Skill Connection Network */}
              <motion.path
                d="M100,100 Q250,50 400,100 T700,100 T900,100"
                stroke="rgba(37, 99, 235, 0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1 }}
              />
              <motion.path
                d="M100,100 Q250,150 400,100 T700,100 T900,100"
                stroke="rgba(124, 58, 237, 0.2)"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 3, delay: 1.2 }}
              />
              
              {/* Skill Nodes */}
              {[100, 300, 500, 700, 900].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy="100"
                  r="6"
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