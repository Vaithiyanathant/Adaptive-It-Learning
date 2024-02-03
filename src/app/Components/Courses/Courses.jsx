"use client"

import Link from "next/link";
import React, { useState } from "react";

const CourseCard = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const coursesPerPage = 4;

    const courses = [
        {
            title: "Full-Stack Web Development Bootcamp",
            description: "Master both front-end and back-end technologies with hands-on projects and real-world applications",
            imageSrc: "https://miro.medium.com/v2/resize:fit:1358/0*ZEPJsASfB2z7hi_0",
            link: '/full' // Example link
        },
        {
            title: "Python Programming Fundamentals",
            description: "Dive into the world of Python programming, from basic syntax to advanced concepts, and build practical applications.",
            imageSrc: "https://miro.medium.com/v2/resize:fit:640/1*DAz2myiqlETWwaAuFBUXqw.jpeg",
            link: '/pyanswer' // Example link
        },
        {
            title: "JavaScript for Modern Web Development",
            description: "Learn the essentials of JavaScript to create interactive and dynamic web applications",
            imageSrc: "https://images.ctfassets.net/8cjpn0bwx327/1kYEy9rLk5z7iD4m2WXW4b/e3f39ee5a02c0a6aac76f91f9d630e3a/JavaScript_in_Web_Development.jpg",
            link: '/javascriptmod' // Example link
        },
    ];

    const totalSlides = Math.ceil(courses.length / coursesPerPage);
    const visibleCourses = courses.slice(currentSlide * coursesPerPage, (currentSlide + 1) * coursesPerPage);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <>
            <div className="mx-40">
                <div className='relative flex gap-10 align-items-center p-10'>
                    {visibleCourses.map((course, index) => (
                        <div
                            key={index}
                            className={`card w-80 bg-white rounded-md shadow-lg transition duration-200 ease-in-out hover:cursor-pointer p-2.5`}
                        >
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
                                <p className='h3 font-medium text-center text-black'>{course.title}</p>
                                <p className='p text-center text-gray-600'>{course.description}</p>
                                <div className='flex items-center justify-center mt-3'>
                                    <div className='icon-box bg-gradient-to-r from-[#F0C000] to-[#F0D800] rounded-md text-center p-3'>
                                        {course.link ? (
                                            <Link href={course.link}>
                                                <p className='span text-white font-semibold'>Get Started</p>
                                            </Link>
                                        ) : (
                                            <p className='span text-white font-semibold'>Course link unavailable</p>
                                        )}
                                    </div>
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

export default CourseCard;
