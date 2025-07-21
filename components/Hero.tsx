'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="container-max section-padding">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-5xl xl:text-6xl">
              Connect with{' '}
              <span className="text-primary-600">Top University Talent</span>{' '}
              Through Our Subscription Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl">
              Revolutionize your hiring process with pre-vetted university students. Fast, affordable, and seamless talent matching with comprehensive support for both employers and students.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a href="#get-started" className="btn-primary">
                Get Started Today
              </a>
              <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-600 transition-colors">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-x-8 text-sm text-gray-600">
              <div className="flex items-center gap-x-2">
                <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>70% Faster Hiring</span>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>Pre-Vetted Talent</span>
              </div>
              <div className="flex items-center gap-x-2">
                <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                <span>Full Support</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-accent-400 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Active Placements</h3>
                    <span className="bg-accent-100 text-accent-800 px-3 py-1 rounded-full text-sm font-medium">Live</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold">JS</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Software Engineering Intern</p>
                        <p className="text-sm text-gray-600">Stanford University • CS Major</p>
                      </div>
                      <span className="text-accent-600 font-medium">Matched</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                        <span className="text-accent-600 font-semibold">MK</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">Marketing Analytics Intern</p>
                        <p className="text-sm text-gray-600">MIT • Business Analytics</p>
                      </div>
                      <span className="text-primary-600 font-medium">Active</span>
                    </div>
                    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold">AL</span>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">UX Design Intern</p>
                        <p className="text-sm text-gray-600">Harvard • Design Studies</p>
                      </div>
                      <span className="text-accent-600 font-medium">Placed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 