/* eslint-disable arrow-body-style */

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'
import images from './galleryHome.json'

import { Navigation } from 'swiper/modules'
import {
	Box,
	Checkbox,
	ListItem,
	ListItemText,
	Typography,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'

export const HomeFeaturedSwiper = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				navigation={true}
				modules={[Navigation]}
				className="mySwiper"
			>
				{images.sections?.featured.map((img, index) => (
					<SwiperSlide key={index}>
						<img src={img.image_url} alt={img.title} />
						<ListItem sx={{ p: 0, gap: '5px' }}>
							<AccountCircleOutlinedIcon
								sx={{ color: '#5e5c5e' }}
							/>
							<ListItemText
								primary={img.user}
								sx={{
									'& .MuiListItemText-primary': {
										fontSize: '16px',
										fontWeight: '500',
										color: '#313031',
									},
								}}
							/>
						</ListItem>
						<ListItem sx={{ p: 0 }}>
							<LocationOnIcon sx={{ color: '#313031' }} />
							<ListItemText
								primary={img.location}
								sx={{
									'& .MuiListItemText-primary': {
										fontSize: '14px',
										color: '#313031',
										fontWeight: '500',
									},
								}}
							/>
						</ListItem>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
