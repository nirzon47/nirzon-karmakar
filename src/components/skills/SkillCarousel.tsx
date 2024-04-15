import { carouselType } from '@/lib/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'
import CarouselHeading from './CarouselHeading'
import CarouselBody from './CarouselBody'

import 'swiper/css/autoplay'
import 'swiper/css'

const SkillCarousel = ({ data }: { data: carouselType[] }) => {
	const [vw, setVw] = useState(0)

	useLayoutEffect(() => {
		const updateViewportDimensions = () => {
			setVw(window.innerWidth)
		}

		updateViewportDimensions()
		window.addEventListener('resize', updateViewportDimensions)

		return () =>
			window.removeEventListener('resize', updateViewportDimensions)
	}, [])

	return (
		<div>
			<CarouselHeading title={'Programming Languages'} />
			<Swiper
				slidesPerView={vw >= 1024 ? 3 : vw >= 768 ? 2 : 1}
				autoplay={{ delay: 3000 }}
				modules={[Autoplay]}
				loop={true}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<div className='flex items-center gap-8 p-4 m-2 bg-black rounded-md bg-opacity-20 ring-1'>
							<Image
								src={item.src}
								alt={item.name}
								width={100}
								height={100}
							/>
							<CarouselBody
								name={item.name}
								level={item.level}
								rating={item.rating}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SkillCarousel
