import { useAnimate, stagger, useInView } from 'framer-motion'
import Card from './Card'
import { useEffect } from 'react'

const cards = [
	{
		id: 1,
		title: 'Who am I?',
		yap: "I'm Nirzon (pronounced /nɪrdʒoʊn/), a web developer driven by curiosity to create innovative solutions. Backed by a strong JavaScript foundation, I'm motivated to make a meaningful impact through my work.",
	},
	{
		id: 2,
		title: 'What do I do?',
		yap: 'As a JavaScript developer, I build attractive and efficient web solutions, always eager for new projects. I learn quickly and enjoy solving complex problems to deliver significant outcomes.',
	},
	{
		id: 3,
		title: 'What inspires me?',
		yap: "Seeing my creations used by people is deeply fulfilling. Impacting lives and making meaningful connections brings me great joy. I love collaborating with others - it's an exciting and rewarding experience.",
	},
	{
		id: 4,
		title: 'What are my unique strengths?',
		yap: "With a passion for teaching and experience as an instructor, I have refined communication skills. I'm energized by exploring new frameworks and libraries, driving me towards innovative projects. I'm responsible and thrive under deadline pressure.",
	},
	{
		id: 5,
		title: "What are the next steps I'm planning to advance my career or skills?",
		yap: 'I’m thrilled about app development with React Native and Expo, open to diverse tech stacks, and eager to continue my growth as a developer.',
	},
	{
		id: 6,
		title: 'What do I do outside of work?',
		yap: "In my free time, I'm passionate about exploring new technologies, gaming, and fueling my creativity with coffee. I love modding games and building custom apps for gaming communities, which inspire the innovative mindset I bring to my work as a developer.",
	},
]

const AboutCards = () => {
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		animate(
			'.about-cards',
			isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 },
			{
				delay: isInView ? stagger(0.1, { startDelay: 0.15 }) : 0,
			}
		)
	}, [scope, animate, isInView])

	return (
		<div
			className='grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3 md:mt-8'
			ref={scope}
		>
			{cards.map((card) => (
				<div key={card.id} className='about-cards'>
					<Card content={card} />
				</div>
			))}
		</div>
	)
}

export default AboutCards
