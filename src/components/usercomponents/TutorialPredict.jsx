import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

const steps = [
	{
		label: 'Select campaign settings',
		description: `For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more.`,
	},
	{
		label: 'Create an ad group',
		description:'An ad group contains one or more ads which target a shared set of keywords.',
	},
	{
		label: 'Create an ad',
		description: `Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues.`,
	},
];

	const TutorialPredict = () => {
	const [show, setShow] = useState(false);

	const modalRef = useRef();

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const handleOutsideClick = (e) => {
		if (modalRef.current && !modalRef.current.contains(e.target)) {
		handleClose();
		}
	};

	const [activeStep, setActiveStep] = React.useState(0);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div>

		<button onClick={handleShow} className="text-lg lg:text-xl text-white bg-sky-400 px-6 py-3 rounded-lg mb-3 lg:mb-0 lg:mr-3 transition duration-300 hover:bg-sky-500 shadow-lg">
			<div className="flex justify-between">
			<div className="mr-2">Tutorial Prediksi</div>
			</div>
		</button>

		{show && (
			<div className="fixed inset-0 mt-20 " onClick={handleOutsideClick} >
			<div className="text-center pb-10">

			<div className="fixed inset-0 transition-opacity" aria-hidden="true">
				<div className="absolute inset-0 backdrop-blur-sm"></div>
			</div>

				<div ref={modalRef} className="inline-block rounded-lg text-left overflow-hidden shadow-xl transform sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" >
				<div className="bg-white/40 backdrop-blur-sm pt-4 sm:px-6 sm:pb-4 px-10 py-6">
					<h3 className="text-center lg:text-2xl md:text-xl text-md font-semibold text-sky-900">
					Tutorial Prediksi
					</h3>
					<Box sx={{ maxWidth: 500 }}>
					<Stepper activeStep={activeStep} orientation="vertical">
						{steps.map((step, index) => (
						<Step key={step.label} >

							<StepLabel>
							<div className='font-semibold text-sky-900'>
								{step.label}
							</div>
							</StepLabel>

							<StepContent>
								<p className='text-justify'>{step.description}</p>
							<div>
								<div className='mt-5 text-center'>
									<button
									className='text-white mr-2 bg-emerald-400 py-2 px-2 rounded-md hover:bg-emerald-500 shadow-md hover:shadow-lg transition duration-200 ease-in-out'
									onClick={handleNext}
									sx={{ mt: 1, mr: 1 }}>
									{index === steps.length - 1
										? 'Mengerti'
										: 'Lanjut'}
									</button>
									<button
									className='text-white mr-2 bg-sky-400 py-2 px-2 rounded-md hover:bg-sky-500 shadow-md hover:shadow-lg transition duration-200 ease-in-out'
									disabled={index === 0}
									onClick={handleBack}
									sx={{ mt: 1, mr: 1 }}>
									Kembali
									</button>
								</div>
							</div>
							</StepContent>

						</Step>
						))}
					</Stepper>
					{activeStep === steps.length && (
						<div className='text-center'>
						<div className='py-5 px-5 bg-sky-200/40 rounded-md mb-5'>
							All steps completed - you&apos;re finished
						</div>
						<div>
							<button 
							className='text-white mr-2 bg-sky-400 py-2 px-2 rounded-md hover:bg-sky-500 shadow-md hover:shadow-lg transition duration-200 ease-in-out'
							onClick={handleReset}
							sx={{ mt: 1, mr: 1 }}>
							Reset
							</button>
						</div>
						</div>
					)}
					</Box>
				</div>
				</div>
			</div>
			</div>
		)}
		</div>
	);
};

export default TutorialPredict;
