import React from 'react';
import Recipe from './Recipe';

const Recipes = ({ recipes }) => {
	return (
		<div>
			<h1 className="text-5xl font-bold text-gray-700">Recipes</h1>
			<h3 className="mt-12 font-bold text-gray-500">Latest recipes</h3>
			<div className="flex flex-row flex-wrap mt-2">
				{recipes.map(recipe => (
					<Recipe key={recipe.id} recipe={recipe} />
				))}
			</div>
		</div>
	);
};

export default Recipes;
