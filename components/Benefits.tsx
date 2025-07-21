'use client'

import { motion } from 'framer-motion'
import { 
  BoltIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  AcademicCapIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Speed & Efficiency',
    description: 'Reduce hiring time by 70% with our streamlined process and pre-vetted talent pool.',
    icon: BoltIcon,
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Cost-Effective',
    description: 'Affordable subscription model that often pays for itself through student funding assistance.',
    icon: CurrencyDollarIcon,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Quality Assurance',
    description: '90% employer satisfaction rate with our rigorous vetting and matching process.',
    icon: ShieldCheckIcon,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    name: 'Diverse Talent Pool',
    description: 'Access students from 150+ top universities across various disciplines and backgrounds.',
    icon: UserGroupIcon,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    name: 'Academic Excellence',
    description: 'Connect with high-performing students from prestigious institutions worldwide.',
    icon: AcademicCapIcon,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    name: 'Scalable Solution',
    description: 'Grow your team flexibly with project-based or seasonal intern placements.',
    icon: ChartBarIcon,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
]

export default function Benefits() {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Subscription Intern?
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We've revolutionized the internship marketplace with innovative solutions that benefit everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={benefit.name}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${benefit.bgColor} rounded-lg mb-4`}>
                <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.name}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 lg:p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Hiring Process?
          </h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have streamlined their intern hiring with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#get-started" className="bg-white text-primary-600 hover:bg-gray-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Start Free Trial
            </a>
            <a href="#demo" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 