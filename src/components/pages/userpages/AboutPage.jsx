import React from 'react'
import { contents } from '../../../utils/content'
import tomat from '../../../assets/img/tomat.png'

function AboutPage() {
	return (
		<div className="bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen">
			<div className="container mx-auto lg:mt-0">
				<div className="flex flex-col lg:flex-row items-center justify-center">
					<div className='mt-20 text-center'>

						<h1 className='text-2xl font-semibold text-sky-900 mb-5'>
							About
						</h1>
						<div className='lg:flex'>

							<div className='lg:w-1/2 bg-white/30 backdrop-blur-md rounded-md shadow-md mx-5 mb-5'>
								<p className='text-lg text-justify px-5 py-5 text-sky-900'>
									{contents[3].about}
								</p>
							</div>

							<div className='lg:w-1/2 self-center hidden lg:block'>
								<div className='w-[50%] ml-40'>
									<img src={tomat} />
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutPage
