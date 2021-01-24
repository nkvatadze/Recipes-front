import React from 'react';

const Ingredient = ({ ingredient }) => {
	return (
		<li>
			<p className="text-yellow-600">{`${ingredient.amount} ${ingredient.measurement ?? ''} ${
				ingredient.name
			}`}</p>
		</li>
	);
};

export default Ingredient;
