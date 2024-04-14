import About from '@/components/about/About'
import Landing from '@/components/landing/Landing'

export default function Home() {
	return (
		<div className='overflow-x-hidden gradient-background'>
			<Landing />
			<About />
		</div>
	)
}
