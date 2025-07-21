'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const employerSteps = [
  {
    id: 1,
    name: 'Subscribe & Post',
    description: 'Choose your subscription plan and post detailed internship opportunities with your specific requirements.',
  },
  {
    id: 2,
    name: 'Browse Talent',
    description: 'Access our curated pool of pre-vetted students filtered by skills, university, and availability.',
  },
  {
    id: 3,
    name: 'Interview & Select',
    description: 'Interview candidates through our platform and select the best fit for your needs.',
  },
  {
    id: 4,
    name: 'We Handle the Rest',
    description: 'We manage contracts, onboarding, and administrative tasks while you focus on mentoring.',
  },
]

const studentSteps = [
  {
    id: 1,
    name: 'Create Profile',
    description: 'Build a comprehensive profile showcasing your skills, experience, and career interests.',
  },
  {
    id: 2,
    name: 'Get Vetted',
    description: 'Complete our rigorous vetting process including skills assessments and interviews.',
  },
  {
    id: 3,
    name: 'Apply & Match',
    description: 'Browse opportunities and get matched with companies looking for your specific skills.',
  },
  {
    id: 4,
    name: 'Start Your Internship',
    description: 'Begin your internship with full support and potential funding assistance from us.',
  },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('employers')

  return (
    <section id="how-it-works" className="bg-white section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined process makes it easy for both employers and students to connect and succeed.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'employers'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('employers')}
            >
              For Employers
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'students'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveTab('students')}
            >
              For Students
            </button>
          </div>
        </div>

        {/* Steps */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            {(activeTab === 'employers' ? employerSteps : studentSteps).map((step, index) => (
              <motion.div 
                key={step.id}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full text-white font-bold text-xl mb-4 ${
                    activeTab === 'employers' ? 'bg-primary-600' : 'bg-accent-600'
                  }`}>
                    {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.name}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < (activeTab === 'employers' ? employerSteps : studentSteps).length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className={`h-0.5 w-3/4 ${
                      activeTab === 'employers' ? 'bg-primary-200' : 'bg-accent-200'
                    }`}></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a href="#get-started" className="btn-primary">
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  )
} 