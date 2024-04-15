'use client'

import Heading from '../Heading'
import { motion } from 'framer-motion'
import SkillCarousel from './SkillCarousel'
import { carouselType } from '@/lib/types'

const languages: carouselType[] = [
	{
		id: 1,
		name: 'JavaScript',
		src: '/languages/JavaScript.svg',
		level: 'Advanced',
		rating: 5,
	},
	{
		id: 2,
		name: 'TypeScript',
		src: '/languages/TypeScript.svg',
		level: 'Proficient',
		rating: 4,
	},
	{
		id: 3,
		name: 'HTML',
		src: '/languages/HTML5.svg',
		level: 'Advanced',
		rating: 5,
	},
	{
		id: 4,
		name: 'CSS',
		src: '/languages/CSS3.svg',
		level: 'Advanced',
		rating: 5,
	},
	{
		id: 5,
		name: 'Java',
		src: '/languages/Java.svg',
		level: 'Intermediate',
		rating: 3.5,
	},
]

const Skills = () => {
	return (
		<motion.section
			className='w-screen min-h-screen p-4 md:p-8 lg:p-16 mt-36'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
		>
			<Heading title='Skills' />
			<SkillCarousel data={languages} />
		</motion.section>
	)
}

export default Skills
