import React,{Component ,PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui';

const textStyleHeader = {
	"paddingRight":"0px"
};

class CatalogSectionView extends Component {
	render() {
		let { catalog } = this.props;

		return (
			<Grid>
				<Row center="md">
					<h1>Catálogo</h1>
				</Row>
				<Row center="md">
					{
						catalog.map( (marca) => {
							return marca.categorias.map((cat) => {
								return cat.productos.map((prod, index) => (
									<Col md={4} key={index}>
										<Card>
											<CardHeader
												title={prod.detalle} textStyle={textStyleHeader}
											/>
											<CardMedia>
												<img src={prod.imagen} />
											</CardMedia>
											<CardTitle title={cat.nombre} subtitle={"Código: "+prod.cod} />
											<CardText>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
												Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
												Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
											</CardText>
										</Card>
									</Col>
								))
							})
						})
					}
				</Row>
			</Grid>
		);
	}
};

CatalogSectionView.propTypes = {
	catalog: PropTypes.array.isRequired
};

export default CatalogSectionView;