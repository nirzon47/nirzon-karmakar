'use client'

import Heading from '../Heading'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import SkillCarousel from './SkillCarousel'
import { carouselType } from '@/lib/types'
import { useEffect } from 'react'

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
		rating: 4.5,
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
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		animate('.carousels', isInView ? { opacity: 1 } : { opacity: 0 }, {
			delay: isInView ? stagger(0.1, { startDelay: 0.15 }) : 0,
		})
	}, [scope, animate, isInView])

	return (
		<motion.section
			className='w-screen min-h-screen p-4 md:p-8 lg:p-16 mt-36'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			ref={scope}
		>
			<Heading title='Skills' />
			<div className='carousels'>
				<SkillCarousel data={languages} />
			</div>
		</motion.section>
	)
}

export default Skills
