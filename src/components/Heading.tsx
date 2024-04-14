const Heading = ({ title }: { title: string }) => {
	return (
		<h2 className='inline-block mb-4 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-gray-200 via-gray-300 to-gray-500 bg-clip-text'>
			{title}
		</h2>
	)
}

export default Heading
