/* eslint-disable no-magic-numbers */
/* eslint-disable arrow-body-style */

import {
	Box,
	Stack,
	Typography,
	Step,
	StepLabel,
	StepContent,
	Button,
	Paper,
	Stepper,
} from '@mui/material'
import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { StepperCard } from './StepperCard/StepperCard'
import useStepStore from '../../../store/step'

export const EventsTravel = () => {
	const steps = [
		{
			label: '',
			stepCard: <StepperCard />,
		},
		{
			label: '',
			stepCard: <StepperCard />,
		},
		{
			label: '',
			stepCard: <StepperCard />,
		},
	]

	/* const [activeStep, setActiveStep] = useState(0)

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	} */

	const { activeStep, previousStep, resetStep } = useStepStore()

	return (
		<>
			<Stack spacing={3}>
				<Box sx={{ display: 'flex' }}>
					<LocationOnIcon />
					<Typography>París, Francia</Typography>
				</Box>
				<Typography>Itinerario</Typography>
			</Stack>
			<Box sx={{ maxWidth: 400 }}>
				<Stepper activeStep={activeStep} orientation="vertical">
					{steps.map((step, index) => (
						<Step key={step.label}>
							<StepLabel
								optional={
									index === 2 ?
										<Typography variant="caption"></Typography>
									:	null
								}
								sx={{
									'& .Mui-active': {
										color: '#0D4937 !important',
									},
									'& .Mui-completed': {
										color: '#0D4937 !important',
									},
								}}
							></StepLabel>
							<StepContent
								sx={{
									backgroundColor: '#0D4937',
									color: '#fff',
									borderRadius: '12px',
									width: '240px',
									ml: '50px',
								}}
							>
								<Box sx={{ mb: 2 }}>{step.stepCard}</Box>
							</StepContent>
						</Step>
					))}
				</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} sx={{ p: 3 }}>
						<Typography>
							Tus viajes han sido creados con éxito
						</Typography>
						<Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
							Reset
						</Button>
					</Paper>
				)}
			</Box>
		</>
	)
}
