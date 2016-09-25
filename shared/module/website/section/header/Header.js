import React, { Component ,PropTypes } from 'react';
import { blue500 } from 'material-ui/styles/colors';
import { Toolbar, ToolbarGroup, ToolbarTitle, Paper } from 'material-ui';
import HeaderMenu from './HeaderMenu';

const isMobile = () => {
	if (navigator.userAgent) {
		return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|Mobile/i.test(navigator.userAgent));
	}

	return false;
};

class Header extends Component {
	render() {
		let toolbarStyle = {
			backgroundColor: blue500
		};

		return (
			<Paper zDepth={2}>
				<Toolbar style={toolbarStyle}>
					<ToolbarGroup>
						<ToolbarTitle text="ITN"/>
					</ToolbarGroup>
					<HeaderMenu isMobile={isMobile()}/>
				</Toolbar>
			</Paper>
		)
	}
}

export default Header;