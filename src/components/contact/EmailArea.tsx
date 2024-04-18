'use client'

import { Clipboard, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const EmailArea = () => {
	return (
		<div>
			<h3 className='text-xl md:text-2xl mt-8 mb-4 font-semibold text-primary'>
				Or send me an email
			</h3>
			<div className='flex gap-4'>
				<a
					href='mailto:nirzonk47@gmail.com'
					target='_blank'
					aria-label='LinkedIn link'
				>
					<motion.span
						whileHover={{ scale: 1.03, y: -3 }}
						transition={{ duration: 0.1 }}
						className='px-4 py-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 hover:ring-primary'
					>
						<Mail /> Email me
					</motion.span>
				</a>
				<motion.span
					onClick={() =>
						navigator.clipboard.writeText('nirzonk47@gmail.com')
					}
					whileHover={{ scale: 1.03, y: -3 }}
					transition={{ duration: 0.1 }}
					className='p-2 ring-1 rounded-lg flex gap-4 items-center hover:bg-black hover:bg-opacity-25 hover:ring-primary'
				>
					<Clipboard />
				</motion.span>
			</div>
		</div>
	)
}

export default EmailArea
