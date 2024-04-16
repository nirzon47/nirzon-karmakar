'use client'

import { motion } from 'framer-motion'
import Heading from '../ui/Heading'

const Projects = () => {
	return (
		<motion.section
			className='w-screen min-h-screen p-4 mt-24 md:p-8 lg:p-16'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			id='projects'
		>
			<Heading title='Projects' />
		</motion.section>
	)
}

export default Projects
