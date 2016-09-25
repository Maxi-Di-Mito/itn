import React, { Component ,PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { blue500 } from 'material-ui/styles/colors';

class Footer extends Component {
	render() {
		return (
			<section id="footer" style={{ backgroundColor: blue500 }}>
				<Grid>
					<Row>
						<Col md={12}>
							<Row center="md">
								<i className="small material-icons white">phone</i>
								<p className="white">4225-5650 / 4225-7615</p>
								<i className="small material-icons white">stay_current_portrait</i>
								<p className="white">15-3049-1821 /<br/> 15-3095-4479</p>
								<i className="small material-icons white">email</i>
								<p className="white">itnhorquillas@gmail.com</p>
								<p className="white">Sanma.itn@gmail.com</p>
							</Row>
						</Col>
					</Row>
					<Row center="md" md={12}>
						<span className="white">
							ITN @ copyright 2016
						</span>
					</Row>
				</Grid>
			</section>
		);
	}
}

export default Footer;
