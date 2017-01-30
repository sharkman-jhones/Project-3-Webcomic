import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import comics from '../data/comics';

export default class ComicsPage extends React.Component{
	render() {
		const id = this.props.params.id;
		const comic = comics.filter((comic) => comic.id === id)[0];
		if (!comic){
			return <NotFoundPage/>;
		}
		return (
			<div className='container'>
				<div className='row'>
					<div className='comic-full'>
						<div className='description'>
							{comics.summary}
						</div>
						<div className='pic-container'>
							<img src={`/img/${comic.image[0]}`}/>
							<h2 className='name'>{comic.name}</h2>
							<p className>{comic.summary}</p>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='navigator-buttons'>
						<button type='button' className='btn btn-default' id='com-nav-first'>First</button>
						<button type='button' className='btn btn-default' id='com-nav-prev'>Previous</button>
						<button type='button' className='btn btn-default' id='com-nav-next'>Next</button>
						<button type='button' className='btn btn-default' id='com-nav-last'>Last</button>

					</div>
				</div>
			</div>
		);
	}
}