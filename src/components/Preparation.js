import React, { useState } from 'react';
import Step from './Step';
import { getItem } from '../utils/localstorage';

const Preparation = ({ title, steps }) => {
	const key = `step-completed-`;
	const [completed, setCompleted] = useState(steps.every(step => getItem(`${key}${step.id}`)));

	const handleComplete = () => {
		setCompleted(steps.every(step => getItem(`${key}${step.id}`)));
	};

	return (
		<div className="border-b border-gray-600">
			<h1 className={`${completed ? 'line-through' : 'font-bold'} text-green-900 `}>{title}</h1>
			{steps.map(step => (
				<Step key={step.id} step={step} handlePreperationCompled={handleComplete} />
			))}
		</div>
	);
};

export default Preparation;
