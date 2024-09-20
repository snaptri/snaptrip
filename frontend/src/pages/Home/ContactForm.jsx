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
import { useForm } from 'react-hook-form'

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
		// eslint-disable-next-line no-alert
		alert('Su formulario ha sido enviado conrrectamente')
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
				type="text"
				label="Nombre"
				variant="outlined"
				{...register('nombre', {
					required: {
						value: true,
						message: 'Este campo es requerido',
					},
					minLength: {
						value: 2,
						message: 'Debe tener mas de 2 caracteres',
					},
					maxLength: {
						value: 20,
						message: 'Máximo de 20 caracteres',
					},
					pattern: {
						value: /^[A-Za-zÀ-ÿ\s'-]+$/,
						message:
							'No se permiten caracteres especiales ni números',
					},
				})}
			/>
			{errors.nombre && (
				<span style={{ color: '#f23d30', fontSize: '11px' }}>
					{errors.nombre.message}
				</span>
			)}
			<StyledTextField
				type="text"
				label="Email"
				variant="outlined"
				{...register('email', {
					required: {
						value: true,
						message: 'Este campo es requerido',
					},
					maxLength: {
						value: 150,
						message: 'Máximo de 150 caracteres',
					},
					pattern: {
						value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
						message: 'Formato de correo electrónico inválido',
					},
				})}
			/>
			{errors.email && (
				<span style={{ color: '#f23d30', fontSize: '11px' }}>
					{errors.email.message}
				</span>
			)}
			<StyledTextField
				type="text"
				label="Mensaje"
				variant="outlined"
				{...register('mensaje', {
					required: {
						value: true,
						message: 'Este campo es requerido',
					},
					maxLength: {
						value: 150,
						message: 'Máximo de 150 caracteres',
					},
					minLength: {
						value: 10,
						message: 'Debe tener mas de 10 caracteres',
					},
				})}
			/>
			{errors.mensaje && (
				<span style={{ color: '#f23d30', fontSize: '11px' }}>
					{errors.mensaje.message}
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
