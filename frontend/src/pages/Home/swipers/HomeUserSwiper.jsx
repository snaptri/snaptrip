/* eslint-disable arrow-body-style */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './homeStyles.css'
import users from './homeSliders.json'

import { Pagination, Navigation } from 'swiper/modules'
import { Box, Fab, Typography } from '@mui/material'

export const HomeUserSwiper = () => {
	return (
		<>
			<Swiper
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				style={{}}
			>
				<Typography
					sx={{
						fontSize: '1.5rem',
						color: '#313031',
						fontWeight: '500',
					}}
				>
					Únete a nuestra comunidad de fotógrafos profesionales
				</Typography>
				{users.users.map((user, index) => (
					<SwiperSlide key={index}>
						<img src="" alt="" />
						<Typography
							sx={{
								fontSize: '1.5rem',
								color: '#313031',
								fontWeight: '400',
							}}
						>
							{user.user_name}
						</Typography>

						<Typography
							sx={{
								fontSize: '1rem',
								color: '#313031',
								fontWeight: '400',
							}}
						>
							{user.description}
						</Typography>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
