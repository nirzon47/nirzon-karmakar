const Rating = ({ rating }: { rating: number }) => {
	const full = Math.floor(rating)
	const half = rating - full
	const empty = Math.floor(5 - rating)

	return (
		<div className='flex h-3 gap-1'>
			{[...Array(full)].map((_, index) => (
				<svg
					key={index + ' full'}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					className='fill-white opacity-70'
				>
					<path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z' />
				</svg>
			))}
			{half >= 0.5 && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					className='fill-white opacity-70'
				>
					<path d='M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
				</svg>
			)}
			{[...Array(empty)].map((_, index) => (
				<svg
					key={index + ' empty'}
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 512 512'
					className='fill-white opacity-70'
				>
					<path d='M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z' />
				</svg>
			))}
		</div>
	)
}

export default Rating
