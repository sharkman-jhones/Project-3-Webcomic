import React from 'react';
import { Link } from 'react-router';

export default class ComicsPreview extends React.Component {
	render() {
		return (
			<Link to={`/comic/${this.props.id}`}>
				<div className='comic-preview'>
					<img src={`img/${this.props.image[0]}`}/>
					<h2 className='name'>{this.props.name}</h2>
					<h3 className='prev-summary'>{this.props.summary}</h3>
				</div>
			</Link>
		);
	}
}