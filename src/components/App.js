import './App.css';
import Nav from './Nav';
import Recipes from './Recipes';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const recipes = [
	{
		id: 1,
		name: 'Spaghetti Carbonara',
		cook_time: 25,
		image_url:
			'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
		user: 'Nika',
		ingredients: [
			{
				id: 1,
				name: 'Meat Filling',
				amount: '2',
				measurement: 'kg',
			},
			{
				id: 2,
				name: 'Meat Filling',
				amount: '2',
				measurement: null,
			},
			{
				id: 3,
				name: 'Water',
				amount: '1/4',
				measurement: 'cup',
			},
		],
		preparations: [
			{
				id: 1,
				order: 1,
				title: 'Make the dough',
				description:
					'Stir together flour and salt in a medium bowl. Make a well in center of dry ingredients, and add 1/2 cup water and egg. Stir with a wooden spoon until a shaggy dough forms. Turn dough out onto a lightly floured surface, and knead until smooth and elastic, 4 to 5 minutes. Place dough in a lightly oiled bowl, and cover loosely with plastic wrap. Set aside.',
				image_id: 2,
			},
			{
				id: 2,
				order: 3,
				title: 'Make the meat filling',
				description:
					'Using a fork or your hands, stir together all meat filling ingredients in a large bowl until ground meat is completely broken up and mixture is well blended.',
				image_id: 3,
			},
			{
				id: 3,
				order: 2,
				title: 'Make the meat filling',
				description:
					'Divide dough into thirds. Shape 1 dough portion into a ball, and roll out to about 1/4-inch thickness on a lightly floured work surface. (Keep the remaining dough portions covered with plastic wrap while you work.) Using a 2 1/2-inch round cutter, cut out 8 dough circles, rerolling dough scraps as necessary.',
				image_id: 4,
			},
		],
	},
	{
		id: 2,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
		ingredients: [
			{
				id: 1,
				name: 'Meat Filling',
				amount: '2',
				measurement: 'kg',
			},
			{
				id: 2,
				name: 'Meat Filling',
				amount: '2',
				measurement: null,
			},
			{
				id: 3,
				name: 'Water',
				amount: '1/4',
				measurement: 'cup',
			},
		],
		preparations: [
			{
				id: 1,
				order: 1,
				title: 'Make the dough',
				description:
					'Stir together flour and salt in a medium bowl. Make a well in center of dry ingredients, and add 1/2 cup water and egg. Stir with a wooden spoon until a shaggy dough forms. Turn dough out onto a lightly floured surface, and knead until smooth and elastic, 4 to 5 minutes. Place dough in a lightly oiled bowl, and cover loosely with plastic wrap. Set aside.',
				image_id: 2,
			},
			{
				id: 2,
				order: 3,
				title: 'Make the meat filling',
				description:
					'Using a fork or your hands, stir together all meat filling ingredients in a large bowl until ground meat is completely broken up and mixture is well blended.',
				image_id: 3,
			},
			{
				id: 3,
				order: 2,
				title: 'Make the meat filling',
				description:
					'Divide dough into thirds. Shape 1 dough portion into a ball, and roll out to about 1/4-inch thickness on a lightly floured work surface. (Keep the remaining dough portions covered with plastic wrap while you work.) Using a 2 1/2-inch round cutter, cut out 8 dough circles, rerolling dough scraps as necessary.',
				image_id: 4,
			},
		],
	},
	{
		id: 3,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 4,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 5,
		name: 'Spaghetti Carbonara',
		cook_time: 25,
		image_url:
			'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
		user: 'Nika',
	},
	{
		id: 6,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 7,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 8,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 9,
		name: 'Spaghetti Carbonara',
		cook_time: 25,
		image_url:
			'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
		user: 'Nika',
	},
	{
		id: 10,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 11,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 12,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 13,
		name: 'Spaghetti Carbonara',
		cook_time: 25,
		image_url:
			'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
		user: 'Nika',
	},
	{
		id: 14,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 15,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
	{
		id: 16,
		name: 'Khinkali',
		cook_time: 70,
		image_url: 'https://www.georgianjournal.ge/media/images/georgianews/2015/July/Cuisine/mushroom-khinkali1.jpg',
		user: 'Nika',
	},
];

function App() {
	return (
		<Router>
			<div className="h-full">
				<div className="flex flex-row h-full">
					<Nav />
					<div className="ml-1/4 py-24 pl-12">
						<Switch>
							<Route exact path="/">
								<Redirect to="/recipes" />
							</Route>
							<Route exact path="/recipes">
								<Recipes recipes={recipes} />
							</Route>
							<Route
								render={props => (
									<RecipeDetails
										{...props}
										recipe={recipes.find(recipe => recipe.id === Number(props.match.params.id))}
									/>
								)}
								path="/recipes/:id"
							/>
							<Route path="/about">
								<Home />
							</Route>
							<Route path="/contact">
								<Home />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</Router>
	);
}

export default App;
