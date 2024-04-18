'use client'

import { BookText, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const Resume = () => {
	return (
		<div>
			<h3 className='text-xl md:text-2xl mt-8 mb-4 font-semibold text-primary'>
				Check out my resume
			</h3>
			<div className='flex gap-4'>
				<a
					href={'/Nirzon Taru Karmakar.pdf'}
					target='_blank'
					aria-label='LinkedIn link'
				>
					<motion.span
						whileHover={{ scale: 1.03, y: -3 }}
						transition={{ duration: 0.1 }}
						className='px-4 py-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 hover:ring-primary'
					>
						<BookText /> View Resume
					</motion.span>
				</a>
				<a
					href={'/Nirzon Taru Karmakar.pdf'}
					download={'Nirzon Taru Karmakar.pdf'}
					aria-label='Download resume'
				>
					<motion.span
						whileHover={{ scale: 1.03, y: -3 }}
						transition={{ duration: 0.1 }}
						className='p-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 hover:ring-primary'
					>
						<Download />
					</motion.span>
				</a>
			</div>
		</div>
	)
}

export default Resume
