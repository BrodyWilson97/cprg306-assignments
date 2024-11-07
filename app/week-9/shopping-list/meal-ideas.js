"use client";

import React, { useEffect, useState } from 'react';

export default function MealIdeas (){


const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

const MealIdeas = ({ ingredient }) => {

    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    };


    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        }
    }, [ingredient]);


    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Meal Ideas for {ingredient}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {meals.map(meal => (
                    <li key={meal.idMeal} className="bg-gray-100 rounded-lg p-4 text-center shadow hover:shadow-lg transition-shadow duration-200">
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-32 object-cover rounded-md mb-2" />
                        <span className="font-semibold">{meal.strMeal}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
}