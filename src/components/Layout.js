import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{
	render (){
		return(
			<div className = "app-container">
				<header>
						<nav className='navbar navbar-default navbar-fixed-top'>
							<div className='container'>
					<Link to='/'>
						<a href='#' className='navbar-brand'>Panels</a>
					</Link>
							</div>
						</nav>
				</header>
				<div className='app-content'>{this.props.children}</div>
			</div>
			);
	}
}