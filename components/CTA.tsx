'use client'

import { motion } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  'Access to 150+ partner universities',
  'Pre-vetted talent pool',
  'Full administrative support',
  'Funding assistance for students',
  'Dedicated account management',
  '90% customer satisfaction rate'
]

export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-accent-700 section-padding">
      <div className="container-max">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to revolutionize your hiring?
            </h2>
            <p className="mt-6 text-lg text-primary-100 max-w-xl">
              Join hundreds of companies that have transformed their internship programs with our platform. Start connecting with top university talent today.
            </p>
            
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckIcon className="h-5 w-5 text-accent-400 flex-shrink-0" />
                  <span className="text-primary-100 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Get Started Today</h3>
                <p className="text-gray-600 mt-2">Choose your path to success</p>
              </div>

              <div className="space-y-4">
                <motion.a 
                  href="#employer-signup"
                  className="block w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>I'm an Employer</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="text-sm text-primary-100 mt-1">Find top university talent</div>
                </motion.a>

                <motion.a 
                  href="#student-signup"
                  className="block w-full bg-accent-600 hover:bg-accent-700 text-white font-semibold py-4 px-6 rounded-lg text-center transition-colors duration-200 group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <span>I'm a Student</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="text-sm text-accent-100 mt-1">Launch your career</div>
                </motion.a>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  No setup fees • Cancel anytime • 14-day free trial
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a 
                  href="#demo" 
                  className="block w-full text-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
                >
                  Schedule a demo instead →
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 