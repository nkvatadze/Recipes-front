import React from 'react';
import Ingredient from './Ingredient';
import Preparation from './Preparation';
import _ from 'lodash';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RecipeDetails = ({ recipe }) => {
	const preperations = _.groupBy(recipe.preparations, prep => prep.title);

	return (
		<div>
			<h1 className="text-4xl font-bold text-gray-700"> {recipe.name}</h1>
			<div className="relative">
				<img className="h-96 mt-6" src={recipe.image_url} />
				<div className="absolute top-1 left-1">
					<p className="px-4 py-1  rounded-xl text-sm text-gray-500 font-bold bg-yellow-300">
						<FontAwesomeIcon icon={faClock} /> {recipe.cook_time} MINS
					</p>
				</div>
			</div>
			<div className="flex flex-col h-auto justify-between mt-2">
				<div>
					<h3 className="text-2xl text-gray-600">Ingredients</h3>
					<ul>
						{recipe.ingredients.map(ingredient => (
							<Ingredient key={ingredient.id} ingredient={ingredient} />
						))}
					</ul>
				</div>
				<div className="mt-3">
					<h3 className="text-2xl text-gray-600">Preparation Steps</h3>
					<ul>
						{Object.entries(preperations).map(([key, value]) => (
							<Preparation key={key} title={key} steps={value} />
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
