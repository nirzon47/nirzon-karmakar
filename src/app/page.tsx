import About from '@/components/about/About'
import { Contact } from '@/components/contact/Contact'
import Landing from '@/components/landing/Landing'
import Skills from '@/components/skills/Skills'
import { FloatingNav } from '@/components/ui/FloatingNav'
import {
	Home as HomeIcon,
	Info,
	Code,
	LibraryBig as Library,
	Mail,
} from 'lucide-react'
import dynamic from 'next/dynamic'
const Projects = dynamic(() => import('@/components/projects/Projects'), {
	loading: () => <div></div>,
})

const navItems = [
	{ name: 'Home', link: '/', icon: <HomeIcon /> },
	{ name: 'About', link: '/#about', icon: <Info /> },
	{ name: 'Skills', link: '/#skills', icon: <Code /> },
	{ name: 'Projects', link: '/#projects', icon: <Library /> },
	{ name: 'Contact', link: '/#contact', icon: <Mail /> },
]

export default function Home() {
	return (
		<div className='overflow-x-hidden gradient-background'>
			<FloatingNav navItems={navItems} />
			<Landing />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}
