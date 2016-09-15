import React, { Component ,PropTypes } from 'react';
import GMap from '../common/GMap';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {TextField, Paper, Snackbar, RaisedButton} from 'material-ui';
import {orange500} from 'material-ui/styles/colors'
import ContentSend from 'material-ui/svg-icons/content/send';


class ContactSectionView extends Component
{
    constructor(props)
    {
        super(props);
        this.sendMail = this.sendMail.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.state = {
            open: false,
            snackBarMessage: ""
        };
    }

    sendMail()
    {
        this.props.sendMail(this.refs.contactForm).then((data)=>{
            this.setState({
                open: true,
                snackBarMessage: data.message
            });
        });
    }

    handleRequestClose()
    {
        this.setState({
            open: false
        });
    }

    render()
    {
        const mapProps =
        {
            lat: "-34.702200",
            lng: "-58.407615",
            width: "400px",
            height: "300px",
            zoom: 16
        }

        return (
            <Grid >
                <Row center="md"><h1 className="header center teal-text accent-4">Contáctenos</h1></Row>
                <Row center="md">
                    <Col md={2}>
                        <Paper>
                            <i className="small material-icons">phone</i>
                            <p className="">4225-5650 / 4225-7615</p>
                            <i className="small material-icons">stay_current_portrait</i>
                            <p>15-3049-1821 /<br/> 15-3095-4479</p>
                            <i className="small material-icons">email</i>
                            <p>itnhorquillas@gmail.com</p>
                            <p>Sanma.itn@gmail.com</p>
                        </Paper>
                    </Col>
                    <Col md={4}>
                        <GMap {...mapProps}></GMap><p>Planta Industrial:  Santiago del Estero 2735 (Lanús oeste)</p>
                    </Col>
                </Row>
                <Row center="md">
                    <h5>O envienos un E-Mail a través de esta pagina completando el siguiente formulario.</h5>
                </Row>
                <Row center="md">
                    <Col md={4} >
                        <Paper Depth={2} >
                            <form id="contactForm" ref="contactForm">
                                <TextField
                                    floatingLabelText="Introduzca su E-Mail"
                                    id="mail" name="mail"
                                />
                                <TextField
                                    floatingLabelText="Asunto"
                                    id="subject" name="subject"
                                />
                                <TextField
                                    floatingLabelStyle={{}}
                                    floatingLabelText="Texto"
                                    multiLine={true}
                                    rows={5}
                                    id="texto" name="texto"
                                />
                            </form>
                            <RaisedButton
                                label="Enviar"
                                labelPosition="before"
                                primary={true}
                                icon={<ContentSend />}
                                onClick={this.sendMail}
                            />
                        </Paper>
                    </Col>
                </Row>
                <Snackbar
                    open={this.state.open}
                    message={this.state.snackBarMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </Grid>
        );
    };
}

export default ContactSectionView;