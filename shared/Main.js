import React, { Component ,PropTypes } from 'react';

export default class Main extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		)
	}
}