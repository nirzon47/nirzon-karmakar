import usePreviousState from '@/app/hooks/usePreviousState'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { useCallback, useEffect, useState } from 'react'

// Typing animation settings
const typingSpeed = 0.13
const deleteSpeed = 0.075
const delayBeforeDelete = 1

// Framer motion variant for the entire heading, defines how each letter is animated
const headingVariants: Variants = {
	visible: {
		transition: {
			staggerChildren: typingSpeed,
		},
	},
	exit: {
		transition: {
			staggerChildren: deleteSpeed,
			staggerDirection: -1,
		},
	},
}

// Framer motion variant for each letter
const letterVariants: Variants = {
	enter: { opacity: 0, y: -10 },
	visible: {
		opacity: 1,
		y: 0,
		rotateX: 0,
	},
	exit: {
		opacity: 0,
		y: -30,
		rotateZ: 10,
		scale: 0.8,
		filter: 'blur(10px)',
	},
}

function AboutHeading({ headings }: { headings: string[] }) {
	const [typingMode, setTypingMode] = useState<'typing' | 'erasing'>('typing') // Typing mode for the heading
	const [headingIndex, setHeadingIndex] = useState(0) // Index of the current heading
	const previousHeadingIndex = usePreviousState(headingIndex) // Index of the previous heading (tracks)

	const currentHeading = headings[headingIndex]! // Current heading
	const previousHeading = headings[previousHeadingIndex]! // Previous heading

	const updateTypingModeTimer = useCallback(() => {
		if (typingMode === 'typing') {
			// Calculate the time it takes to type the current heading
			const typeDuration =
				(currentHeading.length * typingSpeed + delayBeforeDelete) * 1000

			// Move to the next heading after the type duration
			return setTimeout(() => {
				const nextHeadingIndex = (headingIndex + 1) % headings.length

				setHeadingIndex(nextHeadingIndex)
				setTypingMode('erasing')
			}, typeDuration)
		}

		// Calculate the time it takes to delete the previous heading
		const deleteDuration = previousHeading.length * deleteSpeed * 1000

		// Move to the next heading after the delete duration
		return setTimeout(() => {
			setTypingMode('typing')
		}, deleteDuration)
	}, [
		currentHeading.length,
		headingIndex,
		headings.length,
		previousHeading.length,
		typingMode,
	])

	useEffect(() => {
		const typingTimer = updateTypingModeTimer()

		return () => clearTimeout(typingTimer)
	}, [typingMode, updateTypingModeTimer])

	return (
		<div className='mt-8 text-2xl md:text-3xl font-semibold drop-shadow'>
			<h3 className='sr-only'>{currentHeading}</h3>
			<AnimatePresence mode='wait'>
				<motion.h3
					key={currentHeading}
					variants={headingVariants}
					initial='enter'
					animate='visible'
					exit='exit'
				>
					{currentHeading.split('').map((char, index) => (
						<motion.span
							key={`${char}-${index}`}
							className='inline-block whitespace-pre'
							variants={letterVariants}
						>
							{char}
						</motion.span>
					))}
				</motion.h3>
			</AnimatePresence>
		</div>
	)
}

export default AboutHeading
