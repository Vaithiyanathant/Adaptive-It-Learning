import Link from "next/link";

/** @format */
const Video = () => {
	return (
		<>
			<div className='flex'>
				<h1 className='p-20 ttt font-black text-5xl'>Title: {"Variables"}</h1>
				<Link href={'/pythonbeg'}>
				<button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto h-10 mt-20 mx-3  '>
					Back
				</button>
				</Link>
			</div>

			<div className='flex justify-center space-x-2 p-10' >
				<iframe
					width='1200'
					height='600'
					src='https://www.youtube.com/embed/Rtmgt2Qfqr4?si=4a8Fc5oEmv9d_A3b'
					title='YouTube video player'
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
					allowFullScreen></iframe>{" "}
				<iframe
					width='350'
					height='600'
					allow='microphone;'
					src='https://console.dialogflow.com/api-client/demo/embedded/0af0ace7-8154-4234-a73c-e983af9885d3'></iframe>
			</div>
		</>
	);
};

export default Video;
