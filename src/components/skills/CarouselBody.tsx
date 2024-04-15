import Rating from './Rating'

const CarouselBody = ({
	name,
	level,
	rating,
}: {
	name: string
	level: string
	rating: number
}) => {
	return (
		<div className='grid gap-2'>
			<h4 className='text-xl font-medium tracking-wide'>{name}</h4>
			<p className='italic font-light'>{level}</p>
			<Rating rating={rating} />
		</div>
	)
}

export default CarouselBody
