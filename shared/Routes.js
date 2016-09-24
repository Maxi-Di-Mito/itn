import React, { Component ,PropTypes } from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './Main';
import Website from './module/website/Website';

const routes = (
	<Route path="/" component={Main}>
		<IndexRoute component={Website}/>
	</Route>
);

export default routes;