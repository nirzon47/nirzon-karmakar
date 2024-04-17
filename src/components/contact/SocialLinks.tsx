'use client'

import { Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

const SocialLinks = () => {
	return (
		<div>
			<h3 className='text-xl md:text-2xl my-4 font-semibold text-primary'>
				Find me on my socials
			</h3>
			<div className='flex gap-4'>
				<a
					href='https://www.linkedin.com/in/nirzon/'
					target='_blank'
					aria-label='LinkedIn link'
				>
					<motion.span
						whileHover={{ scale: 1.03, y: -3 }}
						className='px-4 py-2 ring-1 rounded-lg flex gap-4 items-center w-32 hover:bg-black hover:bg-opacity-25 duration-150 hover:ring-primary'
					>
						<Linkedin /> LinkedIn
					</motion.span>
				</a>
				<a
					href='https://github.com/nirzon47'
					target='_blank'
					aria-label='GitHub link'
				>
					<motion.span
						whileHover={{ scale: 1.03, y: -3 }}
						className='px-4 py-2 ring-1 rounded-lg flex gap-4 items-center w-32 hover:bg-black hover:bg-opacity-25 duration-150 hover:ring-primary'
					>
						<Github /> GitHub
					</motion.span>
				</a>
			</div>
		</div>
	)
}

export default SocialLinks
