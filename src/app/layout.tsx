import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nirzon Taru Karmakar',
	description:
		'Web developer with a knack for solving complex problems and delivering elegant solutions. Transforming ideas into seamless, user-friendly websites.',
	referrer: 'origin-when-cross-origin',
	keywords: [
		'Nirzon',
		'Nirzon Karmakar',
		'Nirzon Taru Karmakar',
		'India',
		'Web Developer',
		'JavaScript',
		'JavaScript Developer',
		'ReactJS',
		'ReactJS Developer',
		'NextJS',
		'NextJS Developer',
		'Typescript',
		'Typescript Developer',
		'TailwindCSS',
		'Full Stack Developer',
		'NodeJS',
		'Backend Developer',
	],
	authors: [
		{
			name: 'Nirzon Taru Karmakar',
			url: 'https://www.linkedin.com/in/nirzon/',
		},
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		title: 'Nirzon Taru Karmakar',
		description:
			'Web developer with a knack for solving complex problems and delivering elegant solutions. Transforming ideas into seamless, user-friendly websites.',
		url: 'https://nirzonkarmakar.com',
		siteName: 'Nirzon Taru Karmakar',
		locale: 'en-US',
		type: 'website',
	},
	twitter: {
		title: 'Nirzon Taru Karmakar',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
