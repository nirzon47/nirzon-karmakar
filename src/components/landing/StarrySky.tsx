'use client'

import anime from 'animejs/lib/anime.es.js'
import { useState, useEffect, useLayoutEffect } from 'react'
import { nanoid } from 'nanoid'

const StarrySky = () => {
	const num = 25
	const [vw, setVw] = useState(
		Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	)
	const [vh, setVh] = useState(
		Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
	)

	const updateViewportDimensions = () => {
		setVw(
			Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
		)
		setVh(
			Math.max(
				document.documentElement.clientHeight,
				window.innerHeight || 0
			)
		)
	}

	const starryNight = () => {
		anime({
			targets: ['#sky .star'],
			opacity: [
				{
					duration: 2000,
					value: '0',
				},
				{
					duration: 2000,
					value: '1',
				},
			],
			easing: 'linear',
			loop: true,
			delay: (_, i) => 50 * i,
		})
	}

	const shootingStars = () => {
		anime({
			targets: ['#shootingStars .wish'],
			easing: 'linear',
			loop: true,
			delay: (_, i) => 1000 * i,
			opacity: [
				{
					duration: 1000,
					value: '1',
				},
			],
			width: [
				{
					value: '150px',
				},
				{
					value: '0px',
				},
			],
			translateX: 350,
		})
	}

	const randomRadius = () => {
		return Math.random() * 0.7 + 0.6
	}

	const getRandomX = () => {
		return Math.floor(Math.random() * Math.floor(vw)).toString()
	}

	const getRandomY = () => {
		return Math.floor(Math.random() * Math.floor(vh)).toString()
	}

	useEffect(() => {
		starryNight()
		shootingStars()

		return () => {
			anime.remove('#sky .star')
			anime.remove('#shootingStars .wish')
		}
	}, [])

	useLayoutEffect(() => {
		updateViewportDimensions()
		starryNight()
		shootingStars()

		window.addEventListener('resize', updateViewportDimensions)
		return () => {
			window.removeEventListener('resize', updateViewportDimensions)
		}
	}, [])

	return (
		<div className='relative overflow-hidden'>
			<svg id='sky' className='w-screen h-screen'>
				{[...Array(num)].map(() => (
					<circle
						key={nanoid()}
						cx={getRandomX()}
						cy={getRandomY()}
						r={randomRadius()}
						stroke='none'
						strokeWidth='0'
						fill='white'
						className='star'
					/>
				))}
			</svg>
			<div
				id='shootingStars'
				className='absolute top-0 z-10 w-screen h-[150vh] overflow-hidden'
			>
				{[...Array(60)].map(() => (
					<div
						key={nanoid()}
						className='wish'
						style={{
							left: `${getRandomY()}px`,
							top: `${getRandomX()}px`,
						}}
					/>
				))}
			</div>
		</div>
	)
}

export default StarrySky
