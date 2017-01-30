import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import comicsMenu from './comicsMenu';
import comics from '../data/comics';

export default class comicsPage extends React.Component{
	render() {
		const id = this.props.params.id;
		const comic = comics.filter((comic) => comic.id === id)[0];
		if (!comic){
			return <NotFoundPage/>;
		}
		return (
			<div className='comic-full'>
				<comicsMenu/>
				<div className='pic-container'>
					<img src={`/img/$comic.image`}/>
					<h2 className='name'>{comic.name}</h2>
				</div>
				<div className='description'>
					{comics.summary}
				</div>
			</div>
		);
	}
}