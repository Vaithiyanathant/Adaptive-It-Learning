
"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Recommendation() {
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        async function fetchRecommendations() {
            try {
                const response = await axios.post('/recommend', { user_id: 1, course_id: 1 });
                setRecommendations(response.data);
            } catch (error) {
                console.error('Error fetching recommendations:', error);
            }
        }

        fetchRecommendations();
    }, []);

    return (
        <div>
            <h1>Recommended Courses</h1>
            <ul>
                {recommendations.map(course => (
                    <li key={course.course_id}>{course.course_name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Recommendation;
