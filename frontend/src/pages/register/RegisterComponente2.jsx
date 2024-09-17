/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import validator from 'validator' // Importación de validator
import { Toaster, toast } from 'sonner'
import styles from '../register/Register.module.css'
import useRegisterUser from '../../store/store'
import { useNavigate } from 'react-router-dom'
import { LoaderComp } from './Loader'

// hola
const MIN_PASSWORD_LENGTH = 8
// const MIN_USERNAME_LENGTH = 6
const RESERVED_USERNAMES = ['admin', 'root', 'invitado']

// Simular una llamada a la API para verificar si el correo electrónico ya está registrado.
const checkEmailAvailability = async (email) => {
	const registeredEmails = [
		'user1@example.com',
		'user2@example.com',
		'user3@example.com',
	] // Estos son solo ejemplos.
	return registeredEmails.includes(email)
}

const registeredUser = () => {
	const userName = []
}

const isValidUsername = (username) => {
	const validChars = /^[a-zA-Z0-9_-]+$/
	return validChars.test(username) && !RESERVED_USERNAMES.includes(username)
}

const isValidEmail = (email) => validator.isEmail(email)

export const RegisterComponente = () => {
	const Nav = useNavigate()
	const [email, setEmail] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmPassword, setShowConfirmPassword] = useState(false)
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const [Succes, setSucces] = useState("")
	// estos estados todavia no funcionan automaticamente, pero si manualmente
	const [ActiveButtonRegister, setActiveButtonRegister] = useState(false)
	const [Loader, setLoader] = useState(false)
	const [MatchPassword, setMatchPassword] = useState(false)
	const handleClickShowPassword = () => setShowPassword((show) => !show)
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show)

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	const hasUpperCase = /[A-Z]/.test(password)
	const hasLowerCase = /[a-z]/.test(password)
	const hasNumbers = /\d/.test(password)
	const hasNonalphas = /\W/.test(password)

	const { setUser, resStatus } = useRegisterUser((state) => ({
		...state,
	}))

	const handleRegister = async () => {
		console.log("Evaluando...")

		setLoader(true)
		setTimeout(() => {
			setLoader(false)
			console.log("Registro evaluado")


			if (password.length <= MIN_PASSWORD_LENGTH) {
				console.log(password)
				setError(
					`La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`
				)

				toast.error('Fallo en el registro')
				return
			} else {
				setTimeout(() => {

					setSucces("Datos validos")


				}, 2000)
				setSucces("")
				setActiveButtonRegister(true)
			}
			if (!hasUpperCase || !hasLowerCase || !hasNumbers || !hasNonalphas) {
				toast.error('Fallo en el registro')
				setError(
					'La contraseña debe contener mayúsculas, minúsculas, números y caracteres especiales.'
				)
				return
			} else {
				setSucces("Datos validos")
			}

			if (password !== confirmPassword) {
				toast.error('Fallo en el registro')
				setError('Las contraseñas no coinciden.')
				return
			} else {
				setActiveButtonRegister(true)
				toast.success("Registro exitoso")


			}
			

			// if (confirmPassword) {
			// 	setMatchPassword(true)
			// }
			// setUser('http://127.0.0.1:8000/account/register-user/', {
			// 	email: email,
			// 	password: password,
			// 	confirm_password: confirmPassword,
			// })
			console.log('la peticion fue exitosa ' + resStatus + setUser)

			// Aquí iría el código para registrar al usuario si el correo electrónico está disponible.
			console.log('Registrando usuario:', { password, email, confirmPassword })
			setError('')
			// Reiniciar el formulario
			// setName('')
			setEmail('')
			setPassword('')
			setConfirmPassword('')
			
			
			const MILISECONDS = 1000
			
			// setTimeout(() => {
				// 	// Nav('/auth')
				// }, MILISECONDS)
			}, 1000)
			setSucces("")
	}

	const handleValidationPassword = (e) => {
		if (e.length >= MIN_PASSWORD_LENGTH) {
			// setPasswordHas8char(true)
			setActiveButtonRegister(true)
		}

	}

	const {
		section_form,
		form_password,
		formstyles,
		section_title,
		section_title_b,
		section_div_title,
		div_title_p,
		passwordValid_focus,
		button_register,
		div_section_form,
	} = styles

	const User = useRegisterUser((state) => state.user)

	return (
		<>
			<section className={section_title}>
				<div className={section_div_title}>
					<p className={section_title_b}>Empecemos</p>
					<p className={div_title_p}>
						Completa el form para crear tu cuenta.
					</p>
				</div>
			</section>
			<div className={div_section_form}>
				<form onSubmit={() => User()} className={section_form}>
					<TextField
						required
						id="outlined-required-email"
						label="Correo electrónico"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						fullWidth
						margin="normal"
					/>

					<div className={form_password}>
						<FormControl
							className={formstyles}
							sx={{ w: '100%' }}
							variant="outlined"
							fullWidth
							value={password}
							onChange={(e) =>
								handleValidationPassword(e.target.value)
							}
							color="success"
							margin="normal"
						>
							<InputLabel htmlFor="outlined-adornment-password">
								Contraseña
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-password"
								className={passwordValid_focus}
								type={showPassword ? 'text' : 'password'}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ?
												<VisibilityOff />
												: <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Password"
							/>

							{/*	{MatchPassword ?
								<div className={div_iconSuccesPassword}>
									<CheckCircleIcon color="success" />
									Contraseña Valida
								</div>
							:	<div className={div__button_password}>
									<div className="flex flex-row items-center gap-3">
										<button
											className={`${!PasswordHas8char ? div_button_password_styles_none : div_button_password_styles_nice}  `}
										></button>
										<p>minimo 8 caracteres</p>
									</div>
								
							}*/}
						</FormControl>
						<FormControl
							className={formstyles}
							variant="outlined"
							fullWidth
							margin="normal"
						>
							<InputLabel htmlFor="outlined-adornment-confirm-password">
								Repetir contraseña
							</InputLabel>
							<OutlinedInput
								id="outlined-adornment-confirm-password"
								type={showConfirmPassword ? 'text' : 'password'}
								value={confirmPassword}
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle confirm password visibility"
											onClick={
												handleClickShowConfirmPassword
											}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showConfirmPassword ?
												<VisibilityOff />
												: <Visibility />}
										</IconButton>
									</InputAdornment>
								}
								label="Confirm Password"
							/>

						</FormControl>
					</div>
					{!ActiveButtonRegister &&
						<Button
							variant="contained"
							color="primary"
							disabled
							fullWidth
						>
							Registrar
						</Button>
					}


						{
							ActiveButtonRegister &&
							<ul>

								<Button
									variant="contained"
									color="primary"
									sx={{ width: "100%" }}
									onClick={handleRegister}
									className={button_register}
									fullWidth
								>
									Registrar
								</Button>
							</ul>

						}
						{
							Loader &&
							<ul className='flex justify-center' >
								<LoaderComp />
							</ul>

						}

					{error && (
						<Alert severity="error" style={{ marginTop: '20px', alignItems: "center", justifyContent: "center" }}>
							{error}
						</Alert>
					)}
					{
						Succes &&
						<Alert severity="success" style={{
							marginTop: '20px'
							, alignItems: "center"
							, justifyContent: "center"
						}}>
							{Succes}
						</Alert>

					}

					{resStatus === true && (
						<>
							<p>Usuario creado</p>
						</>
					)}
					{resStatus === false && <p>Error al crear usuario</p>}
					<Toaster richColors position="bottom-center" />



				</form>

			</div>
		</>
	)
}
