"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonial() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};
	const data = [
		{
			name: `Student123`,
			review: `Learn It is fantastic! Well-structured courses, top-notch content. Gained valuable skills.`,
			image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
		},
		{
			name: `TechEnthusiast22`,
			review: `Love Learn It! Knowledgeable instructors, interactive lessons, user-friendly interface.`,
			image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
		},
		{
			name: `CodingPro456`,
			review: `Learn It exceeded expectations. Challenging coding exercises, fantastic community.`,
			image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp",
		},
		{
			name: `LanguageLearner789`,
			review: `Best language learning platform! Immersive lessons, impressive language variety.`,
			image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
		},
		{
			name: `ArtExplorer101`,
			review: `Learn It is a game-changer! Comprehensive art courses, valuable feedback from.`,
			image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp",
		},
	];

	return (
		<div className=' h-auto w-auto mt-500'>
			<br></br>
			<div className='w-3/4 m-auto'>
				<div className='mt-20'>
					<Slider {...settings}>
						{data.map((d) => (
							<div
								key={d.name}
								className='bg-white h-[450px] text-black rounded-xl'>
								<div className='h-56 bg-[#f0d300] flex justify-center items-center rounded-t-xl'>
									<img
										src={d.image}
										alt={`testimonial-${d.name}`}
										className='h-20 w-20 rounded-full'
									/>
								</div>
								<div className='flex flex-col items-center justify-center gap-4 p-4'>
									<p className='text-xl font-semibold'>{d.name}</p>
									<p className='text-center'>{d.review}</p>
									<button className='bg-[#333333] text-white text-lg px-6 py-1 rounded-xl'>
										Read More
									</button>
								</div>
							</div>
						))}
					</Slider>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
		</div>
	);
}

export default Testimonial;
