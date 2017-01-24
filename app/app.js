var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router

var routers = require('./config/routes');
 
ReactDOM.render(
	<h1>This is a thing</h1>

	<Router>{routes}</Router>,
	document.getElementById('app')
)