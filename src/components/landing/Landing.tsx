import dynamic from 'next/dynamic'
import LandingText from './LandingText'

const StarrySky = dynamic(() => import('./StarrySky'), { ssr: false })

const Landing = () => {
	return (
		<div className='relative'>
			<LandingText />
			<StarrySky />
		</div>
	)
}

export default Landing
