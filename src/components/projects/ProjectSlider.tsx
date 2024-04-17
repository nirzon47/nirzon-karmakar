import { useRef } from 'react'
import {
	motion,
	useScroll,
	useSpring,
	useTransform,
	useMotionValue,
	useVelocity,
	useAnimationFrame,
} from 'framer-motion'
import { wrap } from '@motionone/utils'
import Image from 'next/image'
import { IconBrandGithubFilled } from '@tabler/icons-react'

interface ParallaxProps {
	data: any
	baseVelocity: number
}

interface ProjectType {
	id: number
	name: string
	yap: string
	github: string
	link: string
	tech: string
	image: string
}

const projectsTop: ProjectType[] = [
	{
		id: 1,
		name: 'taterDash',
		yap: 'Full stack food delivery web app',
		github: 'https://github.com/nirzon47/taterDash',
		link: 'https://taterdash.vercel.app/',
		tech: 'Next.js, Bun, MongoDB, Express, shadcn/ui, TailwindCSS',
		image: '/projects/project-1.jpg',
	},

	{
		id: 3,
		name: 'Affably',
		yap: 'Connects you to your community',
		github: 'https://github.com/nirzon47/affably',
		link: 'https://affably-v1.vercel.app/',
		tech: 'React.js, Firebase SDK, Material UI, TailwindCSS',
		image: '/projects/project-3.png',
	},

	{
		id: 5,
		name: 'Grocery List',
		yap: 'Auto fetched images shopping list',
		github: 'https://github.com/nirzon47/grocery-list',
		link: 'https://grocery-list-blond.vercel.app/',
		tech: 'React.js, TailwindCSS',
		image: '/projects/project-5.png',
	},

	{
		id: 7,
		name: 'GeekFoods',
		yap: 'Hotel/Restaurant Website',
		github: 'https://github.com/nirzon47/geekfoods-final',
		link: 'https://geekfoods-final.vercel.app/',
		tech: 'React.js, TailwindCSS',
		image: '/projects/project-7.jpg',
	},
]

const projectsBottom: ProjectType[] = [
	{
		id: 2,
		name: 'gDisk',
		yap: 'Inspired by Google Drive',
		github: 'https://github.com/nirzon47/gdisk',
		link: 'https://gdisk.vercel.app/',
		tech: 'React.js, Firebase SDK, Redux, shadcn/ui, TailwindCSS',
		image: '/projects/project-2.png',
	},
	{
		id: 4,
		name: 'YouTube Bookmarker',
		yap: 'Save your favorite moments of youtube videos',
		github: 'https://github.com/nirzon47/youtube-bookmark-extension',
		link: 'https://chromewebstore.google.com/detail/youtube-bookmarker/klmdcdoegkdbbpkbfaaflmadoiboplbl',
		tech: 'JavaScript, Chrome API, Manifest V3, TailwindCSS',
		image: '/projects/project-4.png',
	},
	{
		id: 6,
		name: 'Pokedecks',
		yap: 'PokeDex to show your favorite pokemons',
		github: 'https://github.com/nirzon47/pokedex',
		link: 'https://nirzon47-pokedex.vercel.app/',
		tech: 'JavaScript, TailwindCSS, HTML',
		image: '/projects/project-6.png',
	},
	{
		id: 8,
		name: 'Job Posting App',
		yap: 'Add jobs to a job board',
		github: 'https://github.com/nirzon47/job-posting',
		link: 'https://job-posting-one.vercel.app/',
		tech: 'React.js, MongoDB, Express, shadcn/ui, TailwindCSS',
		image: '/projects/project-8.png',
	},
]

const Parallax = ({ data, baseVelocity = 100 }: ParallaxProps) => {
	const baseX = useMotionValue(0)
	const { scrollY } = useScroll()
	const scrollVelocity = useVelocity(scrollY)
	const smoothVelocity = useSpring(scrollVelocity, {
		damping: 50,
		stiffness: 400,
	})
	const velocityFactor = useTransform(smoothVelocity, [0, 10000], [0, 5], {
		clamp: false,
	})

	/**
	 * This is a magic wrapping for the length of the text - you
	 * have to replace for wrapping that works for you or dynamically
	 * calculate
	 */
	const x = useTransform(baseX, (v) => `${wrap(-400, 20, v)}%`)

	const directionFactor = useRef<number>(1)
	useAnimationFrame((t, delta) => {
		let moveBy = directionFactor.current * baseVelocity * (delta / 1000)

		/**
		 * This is what changes the direction of the scroll once we
		 * switch scrolling directions.
		 */
		if (velocityFactor.get() < 0) {
			directionFactor.current = -1
		} else if (velocityFactor.get() > 0) {
			directionFactor.current = 1
		}

		moveBy += directionFactor.current * moveBy * velocityFactor.get()

		baseX.set(baseX.get() + moveBy)
	})

	/**
	 * The number of times to repeat the child text should be dynamically calculated
	 * based on the size of the text and viewport. Likewise, the x motion value is
	 * currently wrapped between -20 and -45% - this 25% is derived from the fact
	 * we have four children (100% / 4). This would also want deriving from the
	 * dynamically generated number of children.
	 */
	return (
		<div className='parallax'>
			<motion.div className='flex gap-6 items-center' style={{ x }}>
				<ParallaxItems data={data} />
			</motion.div>
		</div>
	)
}

const ParallaxItems = ({ data }: { data: any }) => {
	return (
		<div className='flex gap-4 items-center ring-1 ring-zinc-800 rounded-xl p-2'>
			<a
				href={data.link}
				className='w-64 h-auto'
				aria-label={data.name + ' project'}
			>
				<Image
					src={data.image}
					alt={data.name}
					width={1920}
					height={1080}
					className='object-cover rounded-lg hover:scale-105 duration-150'
				/>
			</a>
			<div className='w-48'>
				<div className='flex flex-col gap-2'>
					<a
						href={data.link}
						className='inline-block'
						aria-label={data.name + ' project'}
					>
						<h3 className='text-sm font-medium hover:text-primary duration-150'>
							{data.name}
						</h3>
					</a>
					<p className='text-xs italic font-light'>{data.yap}</p>
					<p className='text-[10px] font-thin'>{data.tech}</p>
					<a
						href={data.github}
						className='text-xs font-light'
						target='_blank'
						rel='noreferrer'
						aria-label={data.name + ' github'}
					>
						<IconBrandGithubFilled className='w-4 h-4 hover:text-primary duration-150' />
					</a>
				</div>
			</div>
		</div>
	)
}

const ProjectSlider = () => {
	return (
		<div className='flex flex-col gap-4 justify-center'>
			<div className='flex gap-6'>
				{projectsTop.map((project) => (
					<Parallax baseVelocity={10} key={project.id} data={project} />
				))}
				{projectsTop.map((project) => (
					<Parallax baseVelocity={10} key={project.id} data={project} />
				))}
			</div>
			<div className='flex gap-6'>
				{projectsBottom.map((project) => (
					<Parallax baseVelocity={-10} key={project.id} data={project} />
				))}
				{projectsBottom.map((project) => (
					<Parallax baseVelocity={-10} key={project.id} data={project} />
				))}
			</div>
		</div>
	)
}

export default ProjectSlider
