import About from '@/components/about/About'
import Landing from '@/components/landing/Landing'
import Skills from '@/components/skills/Skills'

export default function Home() {
	return (
		<div className='overflow-x-hidden gradient-background'>
			<Landing />
			<About />
			<Skills />
		</div>
	)
}
