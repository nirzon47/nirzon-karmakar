const LandingText = () => {
	return (
		<div className='absolute top-0'>
			<section className='absolute top-0 z-30 w-screen h-screen'>
				<div className='flex flex-col justify-center w-screen h-full p-4 text-white md:p-8 lg:p-16'>
					<h2 className='pl-1 mb-4 font-mono font-medium text-primary'>
						Hi, my name is
					</h2>

					<h1 className='mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text'>
						Nirzon Taru Karmakar.
					</h1>

					<h2 className='h-16 mb-4 text-3xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-gray-400 via-gray-400 to-gray-700 bg-clip-text'>
						Building the Web.
					</h2>

					<p className='text-base leading-6 text-gray-300 md:text-xl md:w-1/2'>
						I&apos;m a{' '}
						<strong className='font-bold text-primary'>
							web developer
						</strong>{' '}
						specializing in building and designing extraordinary digital
						experiences. Transforming ideas into reality through
						innovative coding solutions.
					</p>
				</div>
			</section>
		</div>
	)
}

export default LandingText
