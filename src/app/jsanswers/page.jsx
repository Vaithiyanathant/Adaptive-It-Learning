/** @format */
import Link from "next/link";
import "./Answer.css";
const PyAnswer = () => {
	return (

		<div className='d'>
			<div className='flex justify-center items-center h-screen'>
				<div className='text-center p-8 rounded-md shadow-md w-auto h-auto bg-white bg-opacity-20 backdrop-blur-lg  drop-shadow-lg'>
					<h1 className='text-3xl font-bold mb-4'>Do you Already Know {} ??</h1>
					<Link href={'/jsquiz'}>
					<button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2'>
						Yes
					</button>
					</Link>
					<Link href={'/jsbeg'}>
					<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 mb-2'>
						No
					</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PyAnswer;