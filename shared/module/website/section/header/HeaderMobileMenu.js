import React, { Component ,PropTypes } from 'react';
import { FontIcon, IconMenu, IconButton, MenuItem } from 'material-ui';
import { withRouter } from 'react-router';

class HeaderMobileMenu extends Component {
	onItemTouchTap = (event, child) => {
		let key = child.key;
		let hash = null;

		switch (key) {
			case "catalog":
				hash = {
					pathname: '/',
					hash: '#catalog'
				};

				break;
			case "us":
				hash = {
					pathname: '/',
					hash: '#us'
				};

				break;
			case "contact":
				hash = {
					pathname: '/',
					hash: '#contact'
				};

				break;
			default:
				break;
		}

		if (hash) {
			let { router } = this.props;
			router.push(hash);
		}
	};

	render() {
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

		let menuIcon = (
			<IconButton style={{ height: "100%" }}>
				<FontIcon className="material-icons" style={{ backgroundColor: "white" }}>
					menu
				</FontIcon>
			</IconButton>
		);

		return (
			<IconMenu
				iconButtonElement={menuIcon}
				anchorOrigin={{horizontal: 'left', vertical: 'top'}}
				targetOrigin={{horizontal: 'left', vertical: 'top'}}
				onItemTouchTap={this.onItemTouchTap}
			>
				<MenuItem
					key="catalog"
					leftIcon={catalogIcon}
					primaryText="Catalogo"
				/>
				<MenuItem
					key="us"
					leftIcon={usIcon}
					primaryText="Quienes Somos"
				/>
				<MenuItem
					key="contact"
					leftIcon={contactIcon}
					primaryText="Contacto"
				/>
			</IconMenu>
		);
	}
}

export default withRouter(HeaderMobileMenu);