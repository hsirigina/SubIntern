'use client'

import { motion } from 'framer-motion'

const stats = [
  { id: 1, name: 'Successful Placements', value: '2,500+' },
  { id: 2, name: 'Partner Universities', value: '150+' },
  { id: 3, name: 'Employer Satisfaction', value: '95%' },
  { id: 4, name: 'Average Time to Hire', value: '7 Days' },
]

export default function Stats() {
  return (
    <section className="bg-primary-600 section-padding">
      <div className="container-max">
        <motion.div 
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.id} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <dt className="text-base leading-7 text-primary-200">{stat.name}</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white lg:text-4xl">{stat.value}</dd>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 