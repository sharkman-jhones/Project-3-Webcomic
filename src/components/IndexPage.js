
import React from 'react';
import ComicsPreview from './ComicsPreview';

import comics from '../data/comics';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className='home'>
				<div className = 'comic-selector'>
					{comics.map(comicData => <ComicsPreview key={comicData.id} {...comicData} />)}
				</div>
			</div>
		);
	}
}