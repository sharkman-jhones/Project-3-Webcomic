import React from 'react';
import comics from '../data/comics';
 
 var UploadForm = React.createClass({
 	getInitialState: function(){
 		return { fileName: '' };
 	},
 	handleSubmit: function(event){
 		event.preventDefault();
 		console.log(`This is logging this.props.value: ${this.props.value}`);
 		console.log(`This is lgging this.state.value: ${this.state.value}`)
 	},

 	render: function(){
 		return(
 			<div className = 'container'>
				<div className='row'>
					<div className='jumbotron'>
						<h2>Upload Files</h2>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-6'>
						<div className='panel panel-default'>
							<div className='panel-heading'>
								<h3 className='panel-title text-center'>Upload Page</h3>
							</div>
							<div className='panel-body text-center'>
								<form onSubmit={this.handleSubmit}>
									<div className='form-group'>
										<h4><strong>File</strong></h4>
										<input
											type='file'
											value={this.state.fileName}
											className='form-control'
											id='imgUpload'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
 			</div>
		);
 	}

 });

 module.exports = UploadForm;