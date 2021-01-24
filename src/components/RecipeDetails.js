import React from 'react';
import Ingredient from './Ingredient';
import VerticalLine from './VerticalLine';
import Preparation from './Preparation';

const RecipeDetails = ({ recipe }) => {
	return (
		<div>
			<h1 className="text-4xl font-bold text-gray-700"> {recipe.name}</h1>
			<img className="h-96 mt-6" src={recipe.image_url} />
			<div className="flex flex-row h-auto justify-between mt-2">
				<div>
					<h3 className="text-2xl text-gray-600">Ingredients</h3>
					<ul>
						{recipe.ingredients.map(ingredient => (
							<Ingredient key={ingredient.id} ingredient={ingredient} />
						))}
					</ul>
				</div>
				<VerticalLine />
				<div>
					<h3 className="text-2xl text-gray-600">Preparation Steps</h3>
					<ul>
						{recipe.preparations
							.sort((a, b) => (a.order > b.order ? 1 : -1))
							.map(preparation => (
								<Preparation key={preparation.id} preparation={preparation} />
							))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
