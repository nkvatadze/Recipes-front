import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
	return (
		<div className="w-1/4 h-full fixed z-10 top-0 left-0 bg-gray-50 border-b border-gray-400 pl-36 pr-4 pt-6">
			<ul className="mt-6">
				<li className="text-right text-xl mt-2">
					<NavLink
						to="/recipes"
						activeClassName="font-bold text-4xl text-gray-700 active-link"
						className="hover-underline"
					>
						Recipes
					</NavLink>
				</li>
				<li className="text-right text-xl mt-2">
					<NavLink
						to="/about"
						activeClassName="font-bold text-4xl text-gray-700 active-link"
						className="hover-underline"
					>
						About
					</NavLink>
				</li>
				<li className="text-right text-xl mt-2">
					<NavLink
						to="/contact"
						activeClassName="font-bold text-4xl text-gray-700 active-link"
						className="hover-underline"
					>
						Contact
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
