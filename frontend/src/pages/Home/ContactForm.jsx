/* eslint-disable arrow-body-style */
import {
	Box,
	Button,
	Fab,
	Link,
	styled,
	TextField,
	Typography,
} from '@mui/material'
import { useForm, Controller } from 'react-hook-form'

export const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm()
	const onSubmit = handleSubmit((data) => {
		// eslint-disable-next-line no-console
		console.log('formulario enviado', data)
		reset()
	})

	const StyledTextField = styled(TextField)`
		& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiFormLabel-root {
			color: #fff;
		}
		& .Mui-focused .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputBase-input {
			color: #fff;
		}
		& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
			border-color: #fff;
		}
		& .MuiInputLabel-outlined:hover {
			color: #fff;
		}
		& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
			color: #fff;
		}
		& .MuiInputLabel-outlined.Mui-focused {
			color: #fff;
		}
	`

	return (
		<form
			style={{
				backgroundColor: '#0D4937',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				padding: '3rem 1rem',
				gap: '1rem',
			}}
			onSubmit={onSubmit}
		>
			<Typography sx={{ color: '#fff', fontSize: '1.25rem' }}>
				Contactanos:
			</Typography>
			<StyledTextField
				label="Nombre"
				variant="outlined"
				{...register('nombre', {
					required: true,
				})}
			/>
			{errors.nombre && (
				<span style={{ color: 'red', fontSize: '11px' }}>
					Este campo es requerido
				</span>
			)}
			<StyledTextField
				label="Email"
				variant="outlined"
				{...register('email', {
					required: true,
				})}
			/>
			{errors.email && (
				<span style={{ color: 'red', fontSize: '11px' }}>
					Este campo es requerido
				</span>
			)}
			<StyledTextField
				label="Mensaje"
				variant="outlined"
				{...register('mensaje', {
					required: true,
				})}
			/>
			{errors.mensaje && (
				<span style={{ color: 'red', fontSize: '11px' }}>
					Este campo es requerido
				</span>
			)}
			<button
				variant="contained"
				sx={{
					backgroundColor: '#6E9E30',
					color: '#fff',
					width: { xs: '152px' },
					fontSize: { xs: '12px' },
					alignSelf: 'flex-end',
					'&:hover': {
						backgroundColor: '#0D4937',
					},
				}}
			>
				Enviar
			</button>
		</form>
	)
}
