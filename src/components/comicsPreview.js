import React from 'react';
import { Link } from 'react-router';

export default class comicsPreview extends React.Component {
	render() {
		return (
			<Link to={`/comic/${this.props.id}`}>
				<div className='comic-preview'>
					<img src={`img/${this.props.image}`}/>
					<h2 className='name'>{this.props.name}</h2>
				</div>
			</Link>
		);
	}
}