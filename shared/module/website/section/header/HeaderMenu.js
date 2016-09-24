import React, { Component ,PropTypes } from 'react';
import { FontIcon, ToolbarGroup } from 'material-ui';
import FlatButtonLink from './FlatButtonLink';
import HeaderMenuMobile from './HeaderMobileMenu';

class HeaderMenu extends Component {
	render() {
		let { isMobile } = this.props;

		if (isMobile) {
			return (
				<ToolbarGroup lastChild>
					<HeaderMenuMobile/>
				</ToolbarGroup>
			);
		} else {
			let catalogIcon = (
				<FontIcon className="material-icons">
					format_list_bulleted
				</FontIcon>
			);

			let usIcon = (
				<FontIcon className="material-icons">
					person
				</FontIcon>
			);

			let contactIcon = (
				<FontIcon className="material-icons">
					contact_mail
				</FontIcon>
			);

			return (
				<ToolbarGroup lastChild>
					<FlatButtonLink
						isMobile={isMobile}
						to="#catalog"
						label="Catálogo"
						icon={catalogIcon}
					/>
					<FlatButtonLink
						isMobile={isMobile}
						to="#us"
						label="Quienes Somos"
						icon={usIcon}
					/>
					<FlatButtonLink
						isMobile={isMobile}
						to="#contact"
						label="Contacto"
						icon={contactIcon}
					/>
				</ToolbarGroup>
			);
		}
	}
}

HeaderMenu.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};

HeaderMenu.defaultProps = {
	isMobile: false
};

export default HeaderMenu;