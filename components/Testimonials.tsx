'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CTO, TechFlow Solutions',
    company: 'TechFlow Solutions',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    content: 'Subscription Intern transformed our hiring process. We found exceptional CS students from Stanford and MIT in just one week. The quality of candidates and the streamlined process exceeded our expectations.',
    rating: 5,
    type: 'employer'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Computer Science Student',
    company: 'University of California, Berkeley',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    content: 'Thanks to Subscription Intern, I landed my dream internship at a fintech startup. They even helped me secure funding through a university grant. The support throughout the process was incredible.',
    rating: 5,
    type: 'student'
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    role: 'Head of Marketing, GrowthLab',
    company: 'GrowthLab',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    content: 'As a startup, we needed talented marketing interns quickly and cost-effectively. Subscription Intern delivered exactly what we needed - smart, motivated students who hit the ground running.',
    rating: 5,
    type: 'employer'
  },
  {
    id: 4,
    name: 'David Park',
    role: 'MBA Student',
    company: 'Harvard Business School',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    content: 'The platform made finding relevant consulting opportunities so much easier. Instead of applying to dozens of companies, I was matched with firms looking for exactly my skill set.',
    rating: 5,
    type: 'student'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Founder & CEO, DataViz Inc',
    company: 'DataViz Inc',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
    content: 'We\'ve hired 8 interns through Subscription Intern over the past year. Every single one has been exceptional. The vetting process really works - we get candidates who are ready to contribute from day one.',
    rating: 5,
    type: 'employer'
  },
  {
    id: 6,
    name: 'Priya Patel',
    role: 'Design Student',
    company: 'Rhode Island School of Design',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    content: 'Not only did I get placed at an amazing design agency, but the funding assistance meant I could focus entirely on my internship without worrying about finances. Game changer!',
    rating: 5,
    type: 'student'
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="container-max">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Leading Companies and Top Students
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            See what our community says about their experience with Subscription Intern.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
                <div className="ml-auto">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    testimonial.type === 'employer' 
                      ? 'bg-primary-100 text-primary-800' 
                      : 'bg-accent-100 text-accent-800'
                  }`}>
                    {testimonial.type === 'employer' ? 'Employer' : 'Student'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">Join thousands of satisfied users</p>
          <a href="#get-started" className="btn-primary">
            Start Your Success Story
          </a>
        </motion.div>
      </div>
    </section>
  )
} 