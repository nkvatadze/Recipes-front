import React from 'react';

const Preparation = ({ preparation }) => {
	return (
		<div>
			<p className="text-blue-900">{preparation.description}</p>
		</div>
	);
};

export default Preparation;
