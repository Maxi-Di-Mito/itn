import React, { Component ,PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { blue400 } from 'material-ui/styles/colors';

class Footer extends Component {
	render() {
		return (
			<section id="footer" style={{ backgroundColor: blue400 }}>
				<Grid>
					<Row>
						<Col md={12}>
							<Row center="md">
								<i className="small material-icons">phone</i>
								<p className="">4225-5650 / 4225-7615</p>
								<i className="small material-icons">stay_current_portrait</i>
								<p>15-3049-1821 /<br/> 15-3095-4479</p>
								<i className="small material-icons">email</i>
								<p>itnhorquillas@gmail.com</p>
								<p>Sanma.itn@gmail.com</p>
							</Row>
						</Col>
					</Row>
					<Row md={12}>
						<span>ITN @ copyright 2016</span>
					</Row>
				</Grid>
			</section>
		);
	}
}

export default Footer;
