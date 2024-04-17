import About from '@/components/about/About'
import Landing from '@/components/landing/Landing'
import Projects from '@/components/projects/Projects'
import Skills from '@/components/skills/Skills'
import { FloatingNav } from '@/components/ui/FloatingNav'
import {
	Home as HomeIcon,
	Info,
	Code,
	LibraryBig as Library,
	Mail,
} from 'lucide-react'

export default function Home() {
	const navItems = [
		{ name: 'Home', link: '/', icon: <HomeIcon /> },
		{ name: 'About', link: '/#about', icon: <Info /> },
		{ name: 'Skills', link: '/#skills', icon: <Code /> },
		{ name: 'Projects', link: '/#projects', icon: <Library /> },
		{ name: 'Contact', link: '/#contact', icon: <Mail /> },
	]

	return (
		<div className='overflow-x-hidden gradient-background'>
			<FloatingNav navItems={navItems} />
			<Landing />
			<About />
			<Skills />
			<Projects />
			<div className='min-h-screen mt-12 md:mt-96'>wow</div>
		</div>
	)
}
