import React from 'react'

function AboutPage() {
	return (
		<div className="bg-gradient-to-tr from-red-300 via-yellow-200 to-emerald-400 min-h-screen">
		<div className="container mx-auto lg:mt-0">
			<div className="flex flex-col lg:flex-row items-center justify-center">
				<div className='mt-20 text-center'>

					<h1 className='text-2xl font-semibold text-sky-900'>
						About
					</h1>

					<div>
						<p>tomatify adalah</p>
					</div>

					<div>
						<p>website dibangun dengan teknologi ml, dataset dari kaggele</p>
					</div>

					<div>
						<p>deployment menggunakan layanan dari google cloud platform</p>
					</div>

				</div>
			</div>
		</div>
		</div>
	)
}

export default AboutPage
