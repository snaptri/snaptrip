/* eslint-disable arrow-body-style */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './homeStyles.css'
import banners from './homeSliders.json'

import { Pagination } from 'swiper/modules'
import { Box, Fab, Typography } from '@mui/material'

export const HomeBannerSwiper = () => {
	return (
		<>
			<Swiper
				pagination={true}
				modules={[Pagination]}
				className="mySwiper"
				style={{
					'--swiper-pagination-color': '#0D4937',
					'--swiper-pagination-bullet-inactive-color': '#fff',
					'--swiper-pagination-bullet-inactive-opacity': '.8',
					'--swiper-pagination-bullet-size': '10px',
					'--swiper-pagination-bullet-horizontal-gap': '7px',
				}}
			>
				{banners.images.map((image, index) => (
					<SwiperSlide key={index}>
						<Box
							sx={{
								backgroundImage: `url(${image.image_url})`,
								height: '100%',
								width: '100%',
								backgroundRepeat: 'no-repeat',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								gap: '173px',
							}}
						>
							<Typography
								sx={{
									fontSize: '2.5rem',
									color: '#fff',
									fontWeight: '600',
								}}
							>
								{image.title}
							</Typography>
							<Fab
								variant="extended"
								sx={{
									backgroundColor: '#6e9e30',
									color: '#fff',
									width: { xs: '188px' },
									fontSize: { xs: '12px' },
									'&:hover': {
										backgroundColor: '#0D4937',
									},
								}}
							>
								Empezar ahora
							</Fab>
						</Box>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
