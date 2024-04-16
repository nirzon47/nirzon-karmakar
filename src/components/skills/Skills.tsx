'use client'

import Heading from '../Heading'
import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import SkillCarousel from './SkillCarousel'
import { carouselType } from '@/lib/types'
import { useEffect } from 'react'

const programmingLanguages: carouselType[] = [
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

const webFrameworksAndLibraries: carouselType[] = [
	{
		id: 1,
		name: 'ReactJS',
		src: '/client/React.svg',
		level: 'Advanced',
		rating: 5,
	},
	{
		id: 2,
		name: 'NextJS',
		src: '/client/Next.svg',
		level: 'Proficient',
		rating: 4.5,
	},
	{
		id: 3,
		name: 'TailwindCSS',
		src: '/client/Tailwind CSS.svg',
		level: 'Advanced',
		rating: 5,
	},
	{
		id: 4,
		name: 'Redux',
		src: '/client/Redux.svg',
		level: 'Proficient',
		rating: 4.5,
	},
	{
		id: 5,
		name: 'Drizzle',
		src: '/client/Drizzle.png',
		level: 'Intermediate',
		rating: 3.5,
	},
	{
		id: 6,
		name: 'MaterialUI',
		src: '/client/Material UI.svg',
		level: 'Intermediate',
		rating: 4,
	},
]

const backendAndFrameworks: carouselType[] = [
	{
		id: 1,
		name: 'NodeJS',
		src: '/server/Node.js.svg',
		level: 'Proficient',
		rating: 4,
	},
	{
		id: 2,
		name: 'ExpressJS',
		src: '/server/Express.svg',
		level: 'Proficient',
		rating: 4,
	},
	{
		id: 3,
		name: 'MongoDB',
		src: '/server/MongoDB.svg',
		level: 'Proficient',
		rating: 4,
	},
	{
		id: 4,
		name: 'PostgreSQL',
		src: '/server/PostgresSQL.svg',
		level: 'Intermediate',
		rating: 3.5,
	},
	{
		id: 5,
		name: 'Bun',
		src: '/server/Bun.svg',
		level: 'Intermediate',
		rating: 3.5,
	},
	{
		id: 6,
		name: 'Firebase',
		src: '/server/Firebase.svg',
		level: 'Advanced',
		rating: 4.5,
	},
]

const Skills = () => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		animate(
			'.carousels',
			isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 },
			{
				delay: isInView ? stagger(0.3, { startDelay: 0.15 }) : 0,
			}
		)
	}, [scope, animate, isInView])

	return (
		<motion.section
			className='w-screen min-h-screen p-4 mt-24 md:p-8 lg:p-16'
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			ref={scope}
		>
			<Heading title='Skills' />
			<div className='mb-8 carousels'>
				<SkillCarousel
					data={programmingLanguages}
					heading={'Programming Languages'}
				/>
			</div>
			<div className='mb-8 carousels'>
				<SkillCarousel
					data={webFrameworksAndLibraries}
					heading={'Web Frameworks & Libraries'}
				/>
			</div>
			<div className='mb-8 carousels'>
				<SkillCarousel
					data={backendAndFrameworks}
					heading={'Backend & Frameworks'}
				/>
			</div>
		</motion.section>
	)
}

export default Skills
