'use client'

import React, { useState } from 'react'
import {
	motion,
	AnimatePresence,
	useScroll,
	useMotionValueEvent,
} from 'framer-motion'
import { cn } from '@/utils/cn'
import Link from 'next/link'

export const FloatingNav = ({
	navItems,
	className,
}: {
	navItems: {
		name: string
		link: string
		icon?: JSX.Element
	}[]
	className?: string
}) => {
	const { scrollYProgress } = useScroll()

	const [visible, setVisible] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current! - scrollYProgress.getPrevious()!

			if (scrollYProgress.get() < 0.05) {
				setVisible(false)
			} else {
				if (direction < 0) {
					setVisible(true)
				} else {
					setVisible(false)
				}
			}
		}
	})

	return (
		<AnimatePresence mode='wait'>
			<motion.div
				initial={{
					opacity: 1,
					y: -100,
				}}
				animate={{
					y: visible ? 0 : -100,
					opacity: visible ? 1 : 0,
				}}
				transition={{
					duration: 0.2,
				}}
				className={cn(
					'flex w-11/12 md:w-2/3 lg:1/2 fixed top-10 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-[#060034] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-4 md:px-8 py-4 items-center justify-center gap-4 sm:gap-6 md:gap-8',
					!visible && 'hidden',
					className
				)}
			>
				{navItems.map((navItem: any, idx: number) => (
					<Link
						key={`link=${idx}`}
						href={navItem.link}
						className={cn(
							'relative text-neutral-50 text-center items-center flex space-x-1 hover:text-slate-300 duration-150'
						)}
					>
						<div className='flex flex-col items-center gap-1 sm:gap-2 sm:flex-row min-w-8'>
							<span>{navItem.icon}</span>
							<span className='text-[8px] opacity-70 sm:opacity-100 sm:text-sm md:text-base'>
								{navItem.name}
							</span>
						</div>
					</Link>
				))}
			</motion.div>
		</AnimatePresence>
	)
}
