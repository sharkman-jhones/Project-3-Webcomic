import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import comics from '../data/comics';

var ComicsPage = React.createClass({
	getInitialState: function(){
		const id = this.props.params.id;
		this.props.comic = comics.filter((comic) => comic.id === id)[0];
		return{ pageIndex: 0 };
	},
	changePage: function(x){
		let possibleIndex = this.state.pageIndex + x;
		let newPage = Math.max(this.state.pageIndex + x, 0);
		let actualPage = Math.min(this.props.comic.images.length-1, newPage);
		this.setState({
			pageIndex: actualPage
		})
	},
	getFirstPage: function(){
		this.setState({
			pageIndex: 0
		})
	},
	getLastPage: function(){
		let lastPageIndex = this.props.comic.images.length - 1;
		this.setState({
			pageIndex: lastPageIndex
		});
	},

	render: function() {
		if (!this.props.comic){
			return <NotFoundPage/>;
		}
		return (
			<div className='container'>
				<div className='row col-lg-12'>
					<div className='comic-full'>
						<div className='pic-container'>
							<img className='col-lg-12 col-md-12 col-sm-12 col-xs-12' src={`/img/${this.props.comic.images[this.state.pageIndex]}`}/>
							<h2 className='name'>{this.props.comic.name}</h2>
							<p className>{this.props.comic.summary}</p>
						</div>
					</div>
				</div>
				<div className='row col-lg-12'>
					
					<div className='navigator-buttons'>
						<button type='button' className='btn btn-default' id='com-nav-first' onClick={this.getFirstPage}>First</button>

						<button type='button' className='btn btn-default' id='com-nav-prev' onClick={this.changePage.bind(this, -1)}>Previous</button>
						<button type='button' className='btn btn-default' id='com-nav-next' onClick={this.changePage.bind(this, 1)}>Next</button>
					
						<button type='button' className='btn btn-default' id='com-nav-last' onClick={this.getLastPage}>Last</button>
					</div>
				
				</div>
			</div>
		);
	}
});

module.exports = ComicsPage;