import React, { Component ,PropTypes } from 'react';
import { blue400 } from 'material-ui/styles/colors';
import { FlatButton } from 'material-ui';
import { Link } from 'react-router';

class FlatButtonLink extends Component {
	render() {
		let { isMobile, to, label, icon } = this.props;

		if (!isMobile) {
			let linkProps = {
				to: {
					pathname: '/',
					hash: to
				}
			};

			const buttonStyle = {
				height: "100%",
				margin: 0,
				color: "white"
			};

			return (
				<Link {...linkProps}>
					<FlatButton
						label={label}
						style={buttonStyle}
						icon={icon}
						labelPosition="after"
						primary
					/>
				</Link>
			)
		}

		return false;
	}
}

FlatButtonLink.propTypes = {
	isMobile: PropTypes.bool.isRequired,
	to: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.node
};

FlatButtonLink.defaultProps = {
	isMobile: false
};

export default FlatButtonLink;