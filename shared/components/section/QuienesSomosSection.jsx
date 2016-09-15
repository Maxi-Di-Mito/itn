import React, { Component ,PropTypes } from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';

class QuienesSomosSection extends Component
{
    constructor(props)
    {
        super(props);
    };



    render()
    {
        return (
            <Grid>
                <Row center="md">
                    <h1>Quienes Somos</h1>
                </Row>
            </Grid>
        );
    };

}

export default QuienesSomosSection;