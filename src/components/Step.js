import React, { useState } from 'react';
import { faCheckCircle, faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setObject, getItem, removeObject } from '../utils/localstorage';

const Step = ({ step, handlePreperationCompled }) => {
	const key = `step-completed-${step.id}`;
	const [completed, setCompleted] = useState(getItem(key));

	const handleStepComplete = () => {
		setObject(key, true);
		if (completed) {
			removeObject(key);
		}
		setCompleted(!completed);
		handlePreperationCompled();
	};

	return (
		<div className="mb-3 pb-4 cursor-pointer" onClick={handleStepComplete}>
			<FontAwesomeIcon
				className={`text-xl ${completed ? 'text-red-300' : 'text-red-600'} `}
				icon={completed ? faCheckCircle : faCircle}
			/>
			<p className={`${completed ? 'text-gray-400 line-through' : 'text-blue-900'} text-xl`}>
				{step.description}
			</p>
		</div>
	);
};

export default Step;
