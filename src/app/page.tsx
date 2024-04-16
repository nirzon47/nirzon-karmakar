import About from '@/components/about/About'
import Landing from '@/components/landing/Landing'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'

export default function Home() {
	return (
		<div className='overflow-x-hidden gradient-background'>
			<Landing />
			<About />
			<Skills />
			<Projects />
		</div>
	)
}
