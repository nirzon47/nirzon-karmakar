'use client'

import { motion, stagger, useAnimate, useInView } from 'framer-motion'
import Heading from '../ui/Heading'
import EmailArea from './EmailArea'
import Footer from './Footer'
import Resume from './Resume'
import SocialLinks from './SocialLinks'
import { useEffect } from 'react'

export const Contact = () => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		animate(
			'.mini-sections',
			isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 },
			{
				delay: isInView ? stagger(0.3, { startDelay: 0.15 }) : 0,
			}
		)
	}, [scope, animate, isInView])

	return (
		<motion.section
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			ref={scope}
			className=' md:mt-96 w-screen min-h-screen p-4 mt-24 md:p-8 lg:p-16 flex flex-col'
			id='contact'
		>
			<Heading title={'Contact'} />
			<div className='mini-sections'>
				<SocialLinks />
			</div>
			<div className='mini-sections'>
				<EmailArea />
			</div>
			<div className='mini-sections'>
				<Resume />
			</div>
			<Footer />
		</motion.section>
	)
}
