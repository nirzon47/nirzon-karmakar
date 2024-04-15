import { carouselType } from '@/lib/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css/autoplay'
import 'swiper/css'
import { useLayoutEffect, useState } from 'react'
import CarouselHeading from './CarouselHeading'

const SkillCarousel = ({ data }: { data: carouselType[] }) => {
	const [vw, setVw] = useState(window.innerWidth)

	useLayoutEffect(() => {
		const updateViewportDimensions = () => {
			setVw(window.innerWidth)
		}
		window.addEventListener('resize', updateViewportDimensions)

		return () =>
			window.removeEventListener('resize', updateViewportDimensions)
	}, [])

	return (
		<div>
			<CarouselHeading title={'Programming Languages'} />
			<Swiper
				spaceBetween={50}
				slidesPerView={vw > 1024 ? 3 : vw > 768 ? 2 : 1}
				autoplay={{ delay: 2000 }}
				modules={[Autoplay]}
				loop={true}
			>
				{data.map((item) => (
					<SwiperSlide key={item.id}>
						<div className='flex items-center gap-4 p-4 m-2 bg-black rounded-md bg-opacity-20 ring-1'>
							<Image
								src={item.src}
								alt={item.name}
								width={100}
								height={100}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default SkillCarousel
