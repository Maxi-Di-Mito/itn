import React, { Component ,PropTypes } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { TextField, Paper, Snackbar, RaisedButton } from 'material-ui';
import ContentSend from 'material-ui/svg-icons/content/send';
import GoogleMaps from './GoogleMaps';

class ContactSectionView extends Component {
    constructor(props) {
        super(props);
        this.sendMail = this.sendMail.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.state = {
            open: false,
            snackBarMessage: ""
        };
    }

    sendMail() {
        this.props.sendMail(this.refs.contactForm).then((data)=>{
            this.setState({
                open: true,
                snackBarMessage: data.message
            });
        });
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    render() {
        const mapProps = {
            lat: "-34.702200",
            lng: "-58.407615",
            width: "400px",
            height: "400px",
            zoom: 16
        };

        return (
            <section id="contact">
                <Grid>
                    <Row center="md">
                        <h1>Contáctenos</h1>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Row center="md">
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
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Row center="md">
                                <GoogleMaps {...mapProps}/>
                            </Row>
                        </Col>
                    </Row>
                    <Snackbar
                        open={this.state.open}
                        message={this.state.snackBarMessage}
                        autoHideDuration={4000}
                        onRequestClose={this.handleRequestClose}
                    />
                </Grid>
            </section>
        );
    };
}

export default ContactSectionView;