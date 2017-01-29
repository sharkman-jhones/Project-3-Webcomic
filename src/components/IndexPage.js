import React from 'react';
import comicsPreview from './comicsPreview';

import comics from '../data/comics';

export default class IndexPage extends React.Component {
	render() {
		return (
			<div className='home'>
				<div className = 'comic-selector'>
					{comics.map(comicData => <comicsPreview key={comicData.id} {...comicData} />)}
				</div>
			</div>
		);
	}
}