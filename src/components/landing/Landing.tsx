import dynamic from 'next/dynamic'

const StarrySky = dynamic(() => import('./StarrySky'), { ssr: false })

const Landing = () => {
	return (
		<div className='relative'>
			<StarrySky />
		</div>
	)
}

export default Landing
