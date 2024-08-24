// MUI
import {
	Button,
	CircularProgress,
	FormControl,
	IconButton,
	InputAdornment,
	InputLabel,
	OutlinedInput,
} from '@mui/material'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Visibility from '@mui/icons-material/Visibility'
import ErrorIcon from '@mui/icons-material/Error'

// React and utilities
import { useEffect, useState } from 'react'
import { CustomTextField } from './CustomTextField'
import { useUserStoreTemp } from '../../store'
import { useNavigate } from 'react-router-dom'

export const Form = () => {
	const { login } = useUserStoreTemp()
	const navigate = useNavigate()

	const [showError, setShowError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const [disabled, setDisabled] = useState(true)
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: '',
	})

	const handleChange = (e) => {
		setLoginInfo({
			...loginInfo,
			[e.target.name]: e.target.value,
		})
	}

	const isDisable = () => {
		const trimmedEmail = loginInfo.email.trim()
		const trimmedPassword = loginInfo.password.trim()
		const minPasswordChar = 8
		setDisabled(
			trimmedEmail && trimmedPassword.length >= minPasswordChar ?
				false
			:	true
		)
	}

	const handleLogin = async () => {
		setIsLoading(true)
		const isError = await login(loginInfo, navigate)
		setShowError(isError)
		setIsLoading(false)
	}

	useEffect(() => {
		isDisable()
	}, [loginInfo])

	return (
		<>
			<div className="flex flex-col gap-6 px-4 mt-11 w-full md:max-w-[373px]">
				{/* Email input */}
				<CustomTextField
					label="Email"
					type="text"
					value={loginInfo.email}
					name={'email'}
					handleChange={handleChange}
				/>

				{/* Password input */}
				<FormControl variant="outlined">
					<InputLabel htmlFor="password">Password</InputLabel>
					<OutlinedInput
						id="password"
						type={showPassword ? 'text' : 'password'}
						label="Password"
						name="password"
						endAdornment={
							<InputAdornment position="end">
								<IconButton
									onClick={() =>
										setShowPassword(!showPassword)
									}
									edge="end"
								>
									{showPassword ?
										<VisibilityOff />
									:	<Visibility />}
								</IconButton>
							</InputAdornment>
						}
						onChange={handleChange}
					/>
				</FormControl>

				{showError ?
					<div className="text-red-500 flex justify-center gap-2 text-xs">
						<ErrorIcon />
						Email o contraseña incorrecta. Vuelve a intentarlo o
						selecciona "Recuperar" para cambiar la contraseña.
					</div>
				:	null}

				<p className="text-[#807D84] text-xs flex gap-1 mt-2">
					¿Olvidaste tu contraseña?
					<span className="text-[#6E9E30]">Recuperar</span>
				</p>
			</div>

			<div className="py-8">
				<Button
					disabled={disabled || isLoading}
					variant="contained"
					sx={{
						bgcolor: '#6E9E30',
						color: 'white',
						borderRadius: '20px',
						width: '336px',
						display: 'flex',

						':hover': {
							bgcolor: '#6E9E30',
						},
						':disabled': {
							color: 'white',
							bgcolor: '#b5cd98',
						},
					}}
					onClick={handleLogin}
				>
					{isLoading ?
						<CircularProgress size={25} sx={{ color: '#6E9E30' }} />
					:	'Ingresar'}
				</Button>
			</div>
		</>
	)
}
