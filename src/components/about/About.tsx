'use client'

import Heading from '../Heading'
import { motion } from 'framer-motion'
import AboutHeading from './AboutHeading'
import AboutCards from './AboutCards'

// Headings for the About section
const headings = [
	'JavaScript Developer',
	'New Tech Enthusiast',
	'Full Stack Developer',
	'MERN Stack Developer',
	'Problem Solver',
	'Gaming Enthusiast',
	'Code Mentor',
]

const About = () => {
	return (
		<motion.section
			className='w-screen min-h-screen p-4 md:p-8 lg:p-16 mt-36'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Heading title='About' />
			<AboutHeading headings={headings} />
			<AboutCards />
		</motion.section>
	)
}

export default About
