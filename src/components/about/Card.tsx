import { motion } from 'framer-motion'

interface contentType {
	title: string
	yap: string
}

const Card = ({ content }: { content: contentType }) => {
	return (
		<motion.div
			className='w-full h-full p-4 bg-black rounded-md bg-opacity-10 ring-1'
			whileHover={{ y: -5 }}
		>
			<h3 className='mb-2 text-lg font-medium'>{content.title}</h3>
			<p className='font-light'>{content.yap}</p>
		</motion.div>
	)
}

export default Card
