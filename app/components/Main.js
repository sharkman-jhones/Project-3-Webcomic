var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = React.createClass({
	render: function(){
		return(
			<div className='mainContainer'>
				<div className='navbar navbar-default navbar-fixed-top'>
					<div className='container-fluid'>
						<a className='navbar-brand' href='#'>Panels</a>			
					</div>
				</div>
				<div className='container'>
					<h1>Main Content</h1>
				</div>
			</div>
		)
	}

});

module.exports = Main;