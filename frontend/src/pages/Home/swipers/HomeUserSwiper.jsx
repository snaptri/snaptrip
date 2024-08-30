/* eslint-disable arrow-body-style */
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import './homeStyles.css'
import users from './homeSliders.json'

import { Pagination, Navigation } from 'swiper/modules'
import { Avatar, Box, Stack, Typography } from '@mui/material'

export const HomeUserSwiper = () => {
	return (
		<>
			<Swiper
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				{users.users.map((user, index) => (
					<SwiperSlide key={index}>
						<Stack spacing={2} alignItems="center">
							<Avatar
								src={user.profile_img}
								sx={{ height: 236, width: 236 }}
							/>
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
									color: '#313031b7',
									fontWeight: '400',
								}}
							>
								{user.description}
							</Typography>
						</Stack>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
