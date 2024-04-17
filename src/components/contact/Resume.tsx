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
					<motion.button
						whileHover={{ scale: 1.03, y: -3 }}
						className='px-4 py-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 duration-150 hover:ring-primary'
					>
						<BookText /> View Resume
					</motion.button>
				</a>
				<a
					href={'/Nirzon Taru Karmakar.pdf'}
					download={'Nirzon Taru Karmakar.pdf'}
				>
					<motion.button
						whileHover={{ scale: 1.03, y: -3 }}
						className='p-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 duration-150 hover:ring-primary'
					>
						<Download />
					</motion.button>
				</a>
			</div>
		</div>
	)
}

export default Resume
