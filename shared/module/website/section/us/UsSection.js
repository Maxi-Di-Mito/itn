import React, { Component ,PropTypes } from 'react';
import { Grid, Row } from 'react-flexbox-grid';

class UsSection extends Component {
    render() {
        return (
            <section id="us">
                <Grid>
                    <Row center="md">
                        <h1>Quienes Somos</h1>
                    </Row>
                </Grid>
            </section>
        );
    };
}

export default UsSection;