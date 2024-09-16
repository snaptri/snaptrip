/* eslint-disable arrow-body-style */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './featuresStyles.css'
import featureList from './homeSliders.json'
import bg from '/assets/img/swiperBg1.png'
import features from '/assets/img/features.png'

import { Pagination, Navigation } from 'swiper/modules'
import { Avatar, Box, Stack, Typography } from '@mui/material'

export const HomeServicesSwiper = () => {
	return (
		<>
			<Swiper
				pagination={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				style={{
					'--swiper-pagination-color': '#0D4937',
					'--swiper-pagination-bullet-inactive-color': '#adadad',
					'--swiper-pagination-bullet-inactive-opacity': '.8',
					'--swiper-pagination-bullet-size': '10px',
					'--swiper-pagination-bullet-horizontal-gap': '7px',
				}}
			>
				<SwiperSlide className="features">
					<Box
						sx={{
							position: 'relative',
							width: '100vw',
							height: '96px',
							backgroundColor: '#0D4937',
							mt: '90px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Typography
							sx={{
								color: '#fff',
								fontWeight: '400',
								fontSize: '1.5rem',
							}}
						>
							Servicios
						</Typography>
					</Box>
					<img src={bg} />
					<Typography
						sx={{
							color: '#313031',
							fontWeight: '500',
							fontSize: '1rem',
						}}
					>
						Conoce nuestras herramientas para planificar tu viaje
					</Typography>
					<img src={features} />
				</SwiperSlide>
				{featureList.features.map((feature, index) => (
					<SwiperSlide className="features" key={index}>
						<Box
							sx={{
								position: 'relative',
								width: '100vw',
								height: '96px',
								backgroundColor: '#0D4937',
								mt: '90px',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								sx={{
									color: '#fff',
									fontWeight: '400',
									fontSize: '1.5rem',
								}}
							>
								{feature.title}
							</Typography>
						</Box>
						<Typography
							sx={{
								color: '#313031',
								fontWeight: '500',
								fontSize: '1rem',
							}}
						>
							{feature.description}
						</Typography>
						<img src={feature.image_feature} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
