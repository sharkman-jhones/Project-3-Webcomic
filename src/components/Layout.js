import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component{
	render (){
		return(
			<div className = "app-container">
				<header>
					<Link to='/'>
						<a href='#'>Thing</a>
					</Link>
				</header>
				<div className='app-content'>{this.props.children}</div>
				<footer>
					<p>This is a demo to try and build this page</p>
				</footer>
			</div>
			);
	}
}