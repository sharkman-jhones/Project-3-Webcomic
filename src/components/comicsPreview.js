import React from 'react';
import { Link } from 'react-router';

export default class ComicsPreview extends React.Component {
	render() {
		return (
			<Link to={`/comic/${this.props.id}`}>
				<div className='comic-preview col-lg-3 col-md-4 col-xs-6 thumb text-center'>
					<img className='img-responsive' alt={this.props.summary} src={`img/${this.props.image[0]}`}/>
					<div className='prev-title'>{this.props.name}</div>					
				</div>
			</Link>
		);
	}
}