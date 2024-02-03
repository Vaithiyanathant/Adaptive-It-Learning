/** @format */

import React from "react";
export default function Hero() {
	return (
		<div className='flex flex-col md:flex-row items-center gap-10 justify-center'>
			<div className='flex align-items-center'></div>
			<div className='flex-1'>
				<span className='tss bg-gradient-to-r from-yellow-500 to-yellow-700 text-transparent bg-clip-text '>
					Learn It
				</span>
				<div className='subtag text-black'>
					<p className='font-semibold p-1.5'>
						&quot;Empowering Every Learner, Every Step of the Way&quot;
					</p>
					<p className='font-normal h-50 w-50 overflow-hidden text-left text-sm p-2'>
						&quot;Discover personalized learning like never before with LearnIT .Our
						<br />
						adaptive platform customizes education to your needs, providing
						tailored support and resources for every learner. Join us and
						revolutionize the way you learn!&quot;
					</p>
				</div>
				<div className='info_buttons mt-4'>
					<button className='border border-yellow-500 px-6 py-4 ml-4 text-base font-light rounded-full bg-white cursor-pointer px-4 py-2 mr-2 bg-white text-black font-light rounded-full cursor-pointer hover:bg-[#f0d300] hover:text-black focus:outline-none'>
						Skill Test
					</button>
					<button className='border border-yellow-500 px-6 py-4 ml-4 text-base font-light rounded-full bg-white cursor-pointer px-4 py-2 bg-white text-black font-light rounded-full cursor-pointer hover:bg-[#f0d300] hover:text-black focus:outline-none'>
						Courses
					</button>
				</div>
			</div>
			<div className='flex-1'>
				{/* Add your image component or HTML here */}
				<img
					className='h-500px w-500px object-cover hidden md:block'
					src='https://img.freepik.com/premium-vector/artificial-intelligence-cyborg-technological-brain-white-background_185386-676.jpg'
					alt='hero logo'
				/>
			</div>
		</div>
	);
}
