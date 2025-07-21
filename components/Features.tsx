'use client'

import { motion } from 'framer-motion'
import { 
  UserGroupIcon, 
  ClockIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  AcademicCapIcon,
  DocumentCheckIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon 
} from '@heroicons/react/24/outline'

const employerFeatures = [
  {
    name: 'Pre-Vetted Talent Pool',
    description: 'Access rigorously screened students from top universities with verified skills and academic credentials.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Rapid Placement',
    description: 'Reduce hiring time by 70% with our streamlined matching and placement process.',
    icon: ClockIcon,
  },
  {
    name: 'Full Administrative Support',
    description: 'We handle contracts, onboarding, and all legal aspects so you can focus on your business.',
    icon: DocumentCheckIcon,
  },
  {
    name: 'Cost-Effective Subscription',
    description: 'Affordable subscription model with transparent pricing and no hidden fees.',
    icon: CurrencyDollarIcon,
  },
]

const studentFeatures = [
  {
    name: 'Curated Opportunities',
    description: 'Access exclusive internship opportunities from leading companies across various industries.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Funding Assistance',
    description: 'Get help securing external funding from universities, government, and foundation grants.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Career Support',
    description: 'Receive guidance throughout the application process and professional development.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: 'Skills Development',
    description: 'Gain valuable real-world experience while building your professional network.',
    icon: ChartBarIcon,
  },
]

export default function Features() {
  return (
    <section id="employers" className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Built for Success on Both Sides
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform creates value for employers seeking top talent and students pursuing meaningful opportunities.
          </p>
        </motion.div>

        {/* Employer Features */}
        <div className="mb-20">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900">For Employers</h3>
            <p className="mt-2 text-gray-600">Streamline your intern hiring with our comprehensive platform</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {employerFeatures.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Student Features */}
        <div id="students">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900">For Students</h3>
            <p className="mt-2 text-gray-600">Launch your career with meaningful internship experiences</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {studentFeatures.map((feature, index) => (
              <motion.div 
                key={feature.name}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-accent-100 rounded-lg mb-4">
                  <feature.icon className="w-6 h-6 text-accent-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.name}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 