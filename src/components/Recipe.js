import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
	return (
		<Link to={`/recipes/${recipe.id}`}>
			<div className="relative shadow-lg mr-8 mb-12 w-72 h-64 cursor-pointer recipe">
				<div className="absolute top-1 left-1">
					<p className="px-4 py-1  rounded-xl text-sm text-gray-500 font-bold bg-yellow-300">
						<FontAwesomeIcon icon={faClock} /> {recipe.cook_time} MINS
					</p>
				</div>
				<div className="flex flex-col">
					<img className="w-full h-3/4 rounded-t-md" src={recipe.image_url} alt={recipe.name} />
					<div className="w-full h-1/4 rounded-l pl-6 pt-2">
						<h3 className="font-bold text-gray-500">{recipe.name}</h3>
						<h4 className="font-bold text-md text-gray-400">Recipe by {recipe.user}</h4>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Recipe;
