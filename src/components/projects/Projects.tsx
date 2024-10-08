'use client'

import { motion } from 'framer-motion'
import Heading from '../ui/Heading'
import { MacbookScroll } from './Macbook'

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
			<p className='mt-8 text-2xl font-light opacity-65'>
				All projects I have worked on
			</p>
			<MacbookScroll showGradient={false} />
		</motion.section>
	)
}

export default Projects
