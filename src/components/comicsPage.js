import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import comics from '../data/comics';

export default class ComicsPage extends React.Component{
	getInitialState(){
		return{
			pageIndex: 0
		};
	}
	nextPage(){
		return{
			pageIndex: pageIndex+1
		};
	}
	prevPage(){
		return{
			pageIndex: pageIndex-1
		};
	}
	getLastPage(){
		return{
			pageIndex: (comic.image.length-1)
		};
	}

	render() {
		const id = this.props.params.id;
		const comic = comics.filter((comic) => comic.id === id)[0];
		if (!comic){
			return <NotFoundPage/>;
		}
		return (
			<div className='container'>
				<div className='row col-lg-12'>
					<div className='comic-full'>
						<div className='description'>
							{comics.summary}
						</div>
						<div className='pic-container'>
							<img className='col-lg-12 col-md-12 col-sm-12 col-xs-12' src={`/img/${comic.image[pageIndex]}`}/>
							<h2 className='name'>{comic.name}</h2>
							<p className>{comic.summary}</p>
						</div>
					</div>
				</div>
				<div className='row col-lg-12'>
					<div className='navigator-buttons'>
						<button type='button' className='btn btn-default' id='com-nav-first' onClick={this.getFirstPage}>First</button>
						<button type='button' className='btn btn-default' id='com-nav-prev'>Previous</button>
						<button type='button' className='btn btn-default' id='com-nav-next'>Next</button>
						<button type='button' className='btn btn-default' id='com-nav-last' onClick={this.getLastPage}>Last</button>

					</div>
				</div>
			</div>
		);
	}
}