import React from 'react';
import { Link } from 'react-router';
import comics from '../data/comics';

export default class comicsMenu extends React.Component {
	render(){
		return(
			<nav className='Comics-menu'>
				{comics.map(menuComic => {
					return <Link key={menuComic.id} to={`/comic/${menuComic.id}`} activeClassName='active'>
						{menuComic.name}
					</Link>;
				})}
			</nav>
		);
	}
}