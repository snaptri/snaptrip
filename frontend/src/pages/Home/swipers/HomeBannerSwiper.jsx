/* eslint-disable arrow-body-style */

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './styles.css'
import banner from '../../../assets/img/banner.png'

import { Pagination } from 'swiper/modules'
import { Typography } from '@mui/material'

export const HomeBannerSwiper = () => {
	return (
		<>
			<Swiper modules={[Pagination]} className="mySwiper">
				<SwiperSlide
					style={{
						backgroundImage: `url(${banner})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
					}}
				>
					<Typography
						sx={{
							fontWeight: '600',
							fontSize: '2.5rem',
							color: '#fff',
						}}
					>
						Planifica tu viaje fotográfico perfecto
					</Typography>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '1.25rem',
							color: '#fff',
							opacity: '0.7',
						}}
					>
						Descubre como SnapTrip puede ayudarte a planificar tu
						viaje.
					</Typography>
				</SwiperSlide>
			</Swiper>
		</>
	)
}
