import React, { Component ,PropTypes } from 'react';
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
            centerLat: "-34.702550",
            centerLng: "-58.402321",
            markerLat: "-34.702200",
            markerLng: "-58.407615",
            zoom: 16
        };

        return (
            <section id="contact">
                <div className="container">
                    <div className="google-map">
                        <GoogleMaps {...mapProps}/>
                    </div>
                    <div className="overlap">
                        <Paper Depth={2} style={{ padding: "20px" , textAlign: "center"}}>
                            <h3>Contáctenos</h3>
                            <form id="contactForm" ref="contactForm">
                                <TextField
                                    floatingLabelText="Introduzca su E-Mail"
                                    id="mail"
                                    name="mail"
                                    fullWidth
                                />
                                <TextField
                                    floatingLabelText="Asunto"
                                    id="subject"
                                    name="subject"
                                    fullWidth
                                />
                                <TextField
                                    floatingLabelText="Texto"
                                    multiLine={true}
                                    rows={5}
                                    id="texto"
                                    name="texto"
                                    fullWidth
                                />
                            </form>
                            <RaisedButton
                                primary
                                label="Enviar"
                                labelPosition="before"
                                icon={<ContentSend />}
                                onClick={this.sendMail}
                            />
                        </Paper>
                    </div>
                </div>

                <Snackbar
                    open={this.state.open}
                    message={this.state.snackBarMessage}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </section>
        );
    };
}

export default ContactSectionView;