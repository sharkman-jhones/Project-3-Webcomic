var React = require('react');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute = Router.IndexRoute;

var Main = require('../components/Main');
var Pages = require('../components/Pages');

module.exports = (
	<Route path='/' component={Main}>
		<Route path='pages' component={Pages} />
		

	</Route>
);