"use client"

import React, { useState } from "react";

const  Rec = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const coursesPerPage = 4;

	const courses = [
		{
			title: "Full-Stack Web Development Bootcamp",
			description:
				"Master both front-end and back-end technologies with hands-on projects and real-world applications",
			imageSrc: "https://miro.medium.com/v2/resize:fit:1358/0*ZEPJsASfB2z7hi_0",
		},
		{
			title: "Python Programming Fundamentals",
			description:
				"Dive into the world of Python programming, from basic syntax to advanced concepts, and build practical applications.",
			imageSrc:
				"https://miro.medium.com/v2/resize:fit:640/1*DAz2myiqlETWwaAuFBUXqw.jpeg",
		},
		{
			title: "JavaScript for Modern Web Development",
			description:
				"Learn the essentials of JavaScript to create interactive and dynamic web applications",
			imageSrc:
				"https://images.ctfassets.net/8cjpn0bwx327/1kYEy9rLk5z7iD4m2WXW4b/e3f39ee5a02c0a6aac76f91f9d630e3a/JavaScript_in_Web_Development.jpg",
		},
		{
			title: "Java Full-Stack Development",
			description:
				"Explore the Java ecosystem for full-stack development, covering Spring Boot, Hibernate, and front-end frameworks like Angular.",
			imageSrc:
				"https://checkmateittech.com/wp-content/uploads/2023/10/Full-Stack.jpg",
		},
		{
			title: " C# and ASP.NET Core Mastery",
			description:
				"Develop robust and scalable web applications using C# and ASP.NET Core, mastering both server-side and client-side technologies.",
			imageSrc: "https://i.postimg.cc/9QFHTpkg/4910406-cca3-2.jpg",
		},
		{
			title: "Mobile App Development with React Native",
			description:
				"Build cross-platform mobile apps using React Native, covering front-end development for iOS and Android.",
			imageSrc:
				"https://appinventiv.com/wp-content/uploads/2018/08/Reasons-Why-Use-React-Native-for-Mobile-App-Development.png",
		},
		{
			title: "Data Science with Python and R",
			description:
				"Harness the power of Python and R for data analysis, machine learning, and visualization, making data-driven decisions",
			imageSrc:
				"https://images.datacamp.com/image/upload/f_auto,q_auto:best/v1603467080/Python_vs._R_for_Data_Science__What_s_the_Difference__klxnwh.png",
		},
		{
			title: "Ruby on Rails Web Development",
			description:
				"Dive into Ruby on Rails to create elegant and efficient web applications, emphasizing convention over configuration.",
			imageSrc:
				"https://adware-technologies.s3.amazonaws.com/uploads/post/thumbnail/59/Ruby_On_Rails_Web_Development_Company_in_the_USA_Blog.jpg",
		},
	];

	const totalSlides = Math.ceil(courses.length / coursesPerPage);

	const visibleCourses = courses.slice(
		currentSlide * coursesPerPage,
		(currentSlide + 1) * coursesPerPage
	);

	const nextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
	};

	const prevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
	};

	return (
		<>
			<div>
			</div>
			<div className="mx-40">
			<div className='relative flex gap-10  align-items-center p-10 '>
				{visibleCourses.map((course, index) => (
					<div
						key={index}
						className={`card w-80 bg-white rounded-md shadow-lg transition duration-200 ease-in-out hover:cursor-pointer p-2.5 ${
							currentSlide === index ? "border-yellow-500" : "border-gray-300"
						}`}>
						<div className='img'>
							<div className='save'>
								<img
									src={course.imageSrc}
									alt={`Course ${index + 1}`}
									className='object-cover w-full h-40 rounded-t-md'
								/>
							</div>
						</div>
						<div className='text p-3'>
							<p className='h3 font-medium text-center text-black'>
								{course.title}
							</p>
							<p className='p text-center text-gray-600'>
								{course.description}
							</p>
							<div className='flex items-center justify-center mt-3'>
								
							</div>
						</div>
					</div>
				))}
				{totalSlides > 1 && (
					<>
						<button
							className='absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-yellow-500 rounded-full p-2 hover:bg-white hover:text-yellow-500 '
							onClick={nextSlide}>
							&rarr;
						</button>
						<button
							className='absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white bg-yellow-500 rounded-full p-2 hover:bg-white hover:text-yellow-500 -mx-10'
							onClick={prevSlide}>
							&larr;
						</button>
					</>
				)}
			</div>
		</div>
		</>
	);
};

export default Rec;
